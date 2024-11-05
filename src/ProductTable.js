import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBell, faPlus, faSync, faFilter, faExpand } from '@fortawesome/free-solid-svg-icons';
import './ProductTable.css';

const ProductTable = () => {
  const data = [
    { ruleName: 'TradeCode 99', description: 'Vel cras auctor', serviceCalls: '3,638,066', status: 'Online', lastDispatch: '2021-02-05 08:28:36' },
    { ruleName: 'TradeCode 98', description: 'Quam aliquam', serviceCalls: '6,462,020', status: 'Offline', lastDispatch: '2021-02-03 19:49:33' },
    { ruleName: 'TradeCode 97', description: 'Mauris quam tr', serviceCalls: '8,664,948', status: 'Error', lastDispatch: '2021-02-02 19:17:15' },
    { ruleName: 'TradeCode 96', description: 'Fermentum por', serviceCalls: '2,592,335', status: 'Online', lastDispatch: '2021-02-02 09:46:33' },
    { ruleName: 'TradeCode 95', description: 'Sed at ornare', serviceCalls: '6,337,875', status: 'Running', lastDispatch: '2021-02-02 07:57:01' },
    { ruleName: 'TradeCode 94', description: 'Molestie est ph', serviceCalls: '4,927,239', status: 'Running', lastDispatch: '2021-02-02 05:01:54' },
    { ruleName: 'TradeCode 93', description: 'Et adipiscing vi', serviceCalls: '6,241,243', status: 'Error', lastDispatch: '2021-02-02 00:18:11' },
    { ruleName: 'TradeCode 92', description: 'Leo maecenas', serviceCalls: '1,556,493', status: 'Offline', lastDispatch: '2021-02-01 11:03:33' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Online':
        return 'status-online';
      case 'Offline':
        return 'status-offline';
      case 'Error':
        return 'status-error';
      case 'Running':
        return 'status-running';
      default:
        return '';
    }
  };

  return (
    <div className="product-table">
      <div className="table-header">
        <h2>Products</h2>
        <div className="table-actions">
          <button className="icon-button">
            <FontAwesomeIcon icon={faSync} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <button className="icon-button">
            <FontAwesomeIcon icon={faExpand} />
          </button>
          <button className="add-new-button">
            <FontAwesomeIcon icon={faPlus} /> Add New
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Rule Name</th>
            <th>Description</th>
            <th>Service Calls</th>
            <th>Status</th>
            <th>Last Dispatch Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td data-label="Select"><input type="checkbox" /></td>
              <td data-label="Rule Name"><button className="link-button" onClick={() => console.log(item.ruleName)}>{item.ruleName}</button></td>
              <td data-label="Description">{item.description}</td>
              <td data-label="Service Calls">{item.serviceCalls}</td>
              <td data-label="Status"><span className={`status-indicator ${getStatusClass(item.status)}`}></span> {item.status}</td>
              <td data-label="Last Dispatch Time">{item.lastDispatch}</td>
              <td data-label="Action">
                <button className="link-button" onClick={() => console.log('Config clicked')}>
                  <FontAwesomeIcon icon={faCog} /> Config
                </button>
                {' | '}
                <button className="link-button" onClick={() => console.log('Subscription Alert clicked')}>
                  <FontAwesomeIcon icon={faBell} /> Subscription Alert
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>1-10 of 100 items</span>
        <button className="pagination-button">{"<"}</button>
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">4</button>
        <button className="pagination-button">5</button>
        <button className="pagination-button">6</button>
        <button className="pagination-button">{">"}</button>
        <select className="pagination-select">
          <option>10/page</option>
          <option>20/page</option>
          <option>50/page</option>
        </select>
      </div>
    </div>
  );
};

export default ProductTable;

