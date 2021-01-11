//Dados
const allCustomers = require('../data');

module.exports = {
  index(req, res) {
    const { page = 1 } = req.query;
    const limit = 10;
    let customers = []

    try {
      if (Object.entries(req.query).length === 0) {
        customers = allCustomers

      } else {
        if (page === 1) {
          customers = allCustomers.slice(0, 10)
        } else if (page === 2) {
          customers = allCustomers.slice(limit, limit + 10)
        } else {
          customers = allCustomers.slice((limit * page) - 10, ((limit * page) - 10) + 10)
        }
      }

      const count = allCustomers.length

      res.json({
        customers,
        totalPages: Math.ceil(count / limit),
        currentPage: page
      });
    } catch (err) {
      console.error(err);
    }

  },
  show(req, res) {
    const { id } = req.params;

    try {
      const result = allCustomers.filter((customer => {
        return customer._id === id
      }))

      if (result.length === 0) {
        res.send('Cliente não encontrado!')
      } else {
        res.json({
          customer: result[0],
        });
      }

    } catch (error) {
      console.log(error)
    }
  }
}