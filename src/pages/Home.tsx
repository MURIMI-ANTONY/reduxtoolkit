import  {useDispatch,useSelector} from "react-redux";

function Home(){
    const username = useSelector((state:any)=>state.user.value.username)
 return(
    <div>
        <h1>
            This is the Home Page
        </h1>
        <h2>Welcome Aboard {username} </h2>
    </div>
 )
}

export default Home;