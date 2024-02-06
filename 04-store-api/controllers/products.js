const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  // throw new Error("testing error") //prevent try catch and next using async express error
  // const search = 'cc';
  // const products = await Product.find({ name: {$regex:search,$options:''} }); //search with all iteam where atleat there is aa

  // const products = await Product.find({}).sort('-name price'); //name in dec ('name') for asc
  const products = await Product.find({price:{$gt:30}}).sort('name').select("name price").limit(4).skip(0); //to show only specific key
  res.status(200).json({ products, nbHits: products.length });
};
const getAllProducts = async (req, res) => {
  const { featured, company, name, sort , fields,numbericFilters } = req.query;
  const querryObj = {};
  if (featured) {
    querryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    querryObj.company = company;
  }
  if (name) {
    querryObj.name = { $regex: name, $options: "i" };
  }

  //numeric filter
  if(numbericFilters){
    const operatorMap = {
      '>':'$gt',
      '>=':'$gte',
      '=':'$eq',
      '<':'$lt',
      '<=':'$lte',
    }

    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = numbericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)
    const options = ['price','rating']; //based on prince and range
    filters = filters.split(',').forEach((item)=>{
      const [field,operator,value]=item.split('-')
      if (options.includes(field)) {
        querryObj[field] = { [operator]: Number(value) };
      }
    })
    console.log("filters",querryObj)
  }

  // const products = await Product.find(querryObj)
  let result = Product.find(querryObj); //to get all products as per querry
  if (sort) {
    // {{URL}}/products?sort=-name,-price
    const sortList = sort.split(",").join(" ");
    console.log("sortList", sortList);
    result = result.sort(sortList);
  } else {
    result = result.sort("createAt");
  }
  if (fields) {  //only specific field will be displayed
    const fieldsList = fields.split(",").join(" ");
    result = result.select(fieldsList);
  }
  //pagination using limit and skip
  const page = Number(req.query.page)||1;
  const limit = Number(req.query.limit)||10;
  const skip = (page -1)*limit; //for page no to skip data
  result = result.skip(skip).limit(limit)
  const products = await result; //await for result after sort
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
