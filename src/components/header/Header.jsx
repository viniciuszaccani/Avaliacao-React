import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from './logo.png';
import removebg from './logo-removebg.png'


function Header() {

  return (
    <header>
      

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={removebg} className="h-14" alt="ToDo Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ToDo List</span>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <span href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
            <NavLink
                to={"/home"}
                className={({ isActive }) => (isActive ? "selected" : "")}
              >
                Home
            </NavLink>
          </span>

        </li>
        <li>
          
          <span class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <NavLink
                to={"/produto/cadastrar"}
                className={({ isActive }) => isActive ? "selected" : ""}
              >
                Cadastrar tarefa
              </NavLink>
            </span>
        </li>
        <li>
          <span href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <NavLink
                to={"/produtos"}
                className={({ isActive }) => isActive ? "selected" : ""}
              >
                Tarefas
            </NavLink>
          </span>
        

        </li>
        <li>
          <span class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <NavLink
              to={"/sobre"}
              className={({ isActive }) => isActive ? "selected" : ""}
            >
              Sobre
            </NavLink>
          </span>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </header>
  );
}

export default Header;
