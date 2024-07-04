/* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from 'react';
import Login from './pages/Login'
import Register from './pages/Register'
import Index from './pages/Index';
import Index_Perfil from './pages/Index_Perfil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Comida from './pages/Comida';
// const AppRoutes=()=>{
//     return useRoutes([
//         {
//             path: '/',
//             element: <Index/>
//         },
//         {
//             path: '/login',
//             element: <Login/>
//         },
//         {
//             path: '/register',
//             element: <Register/>
//         },
//         {
//             path: '*',
//             element: <NotFound/>
//         },
//         {
//             path: "/comida",
//             element: <Comida/>
//         }
//     ])
// }
function App(){
    return(
        <BrowserRouter>
           <Routes>
                <Route
                path='/' element={<Index/>}>
                </Route>
                <Route
                path='/index_perfil' element={<Index_Perfil/>}>
                </Route>
                <Route
                path='/login' element={<Login/>}>
                </Route>
                <Route
                path='/register' element={<Register/>}>
                </Route>
                <Route
                path='/comida' element={<Comida/>}>
                </Route>
                <Route
                path='*' element={<NotFound/>}>
                </Route>


            </Routes> 
        </BrowserRouter>
    );
}
// function App (){
//     const [view,setView] = useState()
//     useEffect(()=>{
//         selectOption(1)
//     },[])
//     const selectOption=(option)=>{
//         switch (option) {
//             case 1:
//                 setView(<Index
//                     selectOption={selectOption}
//                 />)
//               break;
//             case 2:
//                 setView(<Login
//                     selectOption={selectOption}
//                 />);
//                 break;
//             case 3:
//                 setView(<Registrarse
//                     selectOptionOptions={selectOption}
//                 />);
//                 break;
//             default:
//                 setView(<Index
//                     selectOption={selectOption}
//                 />);
//                 break;
//         }
//     }
//     return (
//         <div>
//             <div className='row'>
//                 <div className='col'>
//                     {view}
//                 </div>
//             </div>
//         </div>

//     );
    

// }

export default App;
