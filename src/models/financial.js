const db = require('../config');

const FinancialReport = {
  getAll: (callback) => {
    const query = 'SELECT * FROM financialreports';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM financialreports WHERE id_report = ?';
    db.query(query, [id], callback);
  },
  create: (report, callback) => {
    const query = 'INSERT INTO financialreports (id_user, report_type, report_period, total_revenue, total_expense, net_profit) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [report.id_user, report.report_type, report.report_period, report.total_revenue, report.total_expense, report.net_profit], callback);
  },
  update: (id, report, callback) => {
    const query = 'UPDATE financialreports SET id_user = ?, report_type = ?, report_period = ?, total_revenue = ?, total_expense = ?, net_profit = ? WHERE id_report = ?';
    db.query(query, [report.id_user, report.report_type, report.report_period, report.total_revenue, report.total_expense, report.net_profit, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM financialreports WHERE id_report = ?';
    db.query(query, [id], callback);
  },
};

module.exports = FinancialReport;
