import Loading from '../components/Loading';
import Loadable from 'react-loadable';


export const App=Loadable({
    loader:()=>import('../components/App'),
    loading:Loading
  })

 export  const Posts =Loadable({
    loader: () => import('../components/Posts'),
    loading: Loading,
  })