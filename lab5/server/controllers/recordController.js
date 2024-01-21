const { Record } = require("../models/models");

class RecordController {

    async create(req, res) {
        try {
          // Деструктурируем данные из запроса
          const { recordDate, authorName, ...otherFields } = req.body;
      
          // Создаем запись, устанавливая поля creation_date и title
          const record = await Record.create({
            creation_date: recordDate, // Дата записи в поле creation_date
            ...otherFields, // Остальные поля из запроса
          });
      
          return res.status(201).json(record);
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }
      }
      
  
  async readAll(req, res) {
    try {
      const records = await Record.findAll();
      return res.status(200).json(records);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  async idRead(req, res) {
    const recordId = req.params.id;
    try {
      const record = await Record.findByPk(recordId);
      if (!record) {
        return res.status(404).json({ error: "Record not found" });
      }
      return res.status(200).json(record);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  async update(req, res) {
    const recordId = req.params.id;
    try {
      const [updatedRowsCount] = await Record.update(req.body, {
        where: { id: recordId },
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: "Record not found" });
      }
      const updatedRecord = await Record.findByPk(recordId);
      return res.status(200).json(updatedRecord);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  async delete(req, res) {
    const recordId = req.params.id;
    try {
      const deletedRowCount = await Record.destroy({
        where: { id: recordId },
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: "Record not found" });
      }
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = new RecordController();
