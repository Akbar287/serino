/* eslint-disable import/no-anonymous-default-export */
import DB from '../data.json'

export default async (req, res) => {
  const id = req.query.id

  if(req.method == 'GET') {
    const response = await DB;
    const data = response.data.items.filter(item => item.id == id)
    res.json({data: data, status: true, message: "product is show"})
  }
  else if(req.method == 'POST') {
    // This Code for Create Product
    res.json({data: "POST"})
  }
  else if (req.method == 'PUT') {
    //This Code for Edit Product
    res.json({data: "PUT"})
  }
  else if(req.method == 'DELETE') {
    //This Code for Delete product
    res.json({data: "DELETE"})
  }
  else {
    //This code for except all conditions
    res.json({ message: "error rest api", data: [], status: false})
  }
};