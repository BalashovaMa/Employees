import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
  const data = [
    {name: 'John C.', salary: 800, increase: false, id : 1},
    {name: 'Alex M.', salary: 300, increase: true, id : 2},
    {name: 'Carl M.', salary: 5000, increase: false, id : 3},
    {name: 'Luda W.', salary: 50, increase: false, id : 4}
  ];
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;