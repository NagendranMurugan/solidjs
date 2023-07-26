import { createSignal, useTransition } from "solid-js";
import {nanoid} from 'nanoid';

function App(){ 
  const [id, setId] = createSignal("");
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [user, setUsers] = createSignal([]);
  const [buttonName, setButtonName] = createSignal([]);
  const deleteUser = (id) =>{
    const newUsers = users().filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  const editUser = (id) => {
    const User = users ().find((user) => user.id === id);
    setId(user.id);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    setButtonName("update");
  };

  const submitUser = (id) => {
    if(id) {
      setButtonName("Add User");
      setUsers(users().filter((user) => user.id !==id));
      setUsers([...useTransition(), { id: id(), name: name(), email: email(), password: password() }]);
      setId("");
      setName("");
      setEmail("");
      setPassword("");
    }else{
      setUsers([...useTransition(), {id: nanoid(8), name: name(), email: email(), password: password() }]);
      setId("");
      setName("");
      setEmail("");
      setPassword("");  
       } 
     };
  
  return(

    <>

    <div class="container">
    <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
    </div>
    
      <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
          <table class="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Id</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Name</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Email</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Password</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Edit</th>
                <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Delete</th>
              </tr>
            </thead>
           <tbody class="bg-white dark:bg-slate-800">
             {
              user().map((user) => { 
              <tr>
                 <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.id}</td>
                 <td class="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{user.name}</td>
                 <td class="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{user.email}</td>
                 <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{user.password}</td>
                 <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick={()=> editUser(user.id)}>Edit</button>
                 </td>
                 <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick={()=> deleteUser(user.id)}>Delete</button>
                 </td>
              </tr>
              }
              )
             }                
            </tbody>
          </table>
        </div>
      </div>
    </>

  );
  }

  export default App;













  

// import Task from './task';

// function App() {
//   return (

//            <>
//            <Task/>
//            </>

//   );
// } 
      
// export default App;














// import logo from './logo.svg';
// import styles from './App.module.css';


    // <div class={styles.App}>
    //   <header class={styles.header}>
    //     <img src={logo} class={styles.logo} alt="logo" />
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       class={styles.link}
    //       href="https://github.com/solidjs/solid"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Solid
    //     </a>
    //   </header>
    // </div>

    // export default App;