const FinancialReport = require('../models/financial');

const getAllReports = (req, res) => {
  FinancialReport.getAll((err, reports) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(reports);
  });
};

const getReportById = (req, res) => {
  const reportId = req.params.id;
  FinancialReport.getById(reportId, (err, report) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!report.length) {
      return res.status(404).send('Report not found');
    }
    res.send(report[0]);
  });
};

const createReport = (req, res) => {
  const { id_user, report_type, report_period, total_revenue, total_expense, net_profit } = req.body;
  const report = { id_user, report_type, report_period, total_revenue, total_expense, net_profit };
  FinancialReport.create(report, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send('Report created');
  });
};

const updateReport = (req, res) => {
  const reportId = req.params.id;
  const { id_user, report_type, report_period, total_revenue, total_expense, net_profit } = req.body;
  const report = { id_user, report_type, report_period, total_revenue, total_expense, net_profit };
  FinancialReport.update(reportId, report, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Report updated');
  });
};

const deleteReport = (req, res) => {
  const reportId = req.params.id;
  FinancialReport.delete(reportId, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Report deleted');
  });
};

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport,
};
