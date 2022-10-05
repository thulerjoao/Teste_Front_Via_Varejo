import * as Style from "./style"
import Logo from "../../assets/images/Logo-header.png";
import Close from "../../assets/images/Close_button.png";
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast";



const Home = () =>{

    interface Product {
        id:number,
        plus:string,
        name:string,
        price:number
    }

    const [plus, setPlus] = useState<string>("-")
    const [name, setName] = useState<string>("")
    const [price, setPrice] = useState<number>(0)
    const [totalPrice, setTotalPrice]= useState<number>(0)
    const [list, setList] = useState<Product[]>([])
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    
    const checkList = ()=>{
        const data = JSON.parse(localStorage.getItem("list") || "")
        setList(data)
    }
    
    useEffect(()=>checkList(),[])
    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(list));
        handleTotalValue()
    },[list])
    
    const handleTotalValue = () =>{
        list.map((elem)=>{
            const value = elem.price
            if(plus==="+"){
                const currentValue = totalPrice + value;
                setTotalPrice(currentValue)
            }else{
                const currentValue = totalPrice - value;
                setTotalPrice(currentValue)
            }
            
        })
    }

    const handleProduct = (plus:string, name:string, price:number) =>{
        if(name!=="" && price!==undefined && price>0){
        const id = list.length
        const data = {
            id:id,
            plus:plus,
            name:name,
            price:price,
        }    
            handleList(data);     

        }else{
            toast.error("Entrada inválida")
        }
    }
        const handleList = (data:Product) =>{
        const oldList = JSON.parse(localStorage.getItem("list") || "")
        setList([...oldList, data])
    }

    
const handleResult = (totalPrice:number) =>{
    if(totalPrice<0){
        return <p className="result">[PREJUIZO]</p>
    }else if(totalPrice==0){
        return
    }else{
        return <p className="result">[LUCRO]</p>
    }
}


    return(
        <Style.HomeContainer>
            <div className="topDiv"></div>
            <div className="mainDiv">
                <header>
                    <img src={Logo}/>
                    <h1>Controle financeiro</h1>
                    <label onClick={()=>setOpenMenu(!openMenu)} >&#9776;</label>
                    <nav className={`nav-container ${openMenu? "nav-open": ""}`}>
                        <img src={Close} alt="X" onClick={()=>setOpenMenu(!openMenu)}/>
                        <ul>
                            <li>Dashbord</li>
                            <p className="bar"></p>
                            <li>Resumo</li>
                            <p className="bar"></p>
                            <li>Configurações</li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div className="newTransaction">
                        <h2>Nova Transação</h2>
                        <form>
                            <div className="first-div">
                                <p>Tipo de transação</p>
                                <select onChange={e => setPlus(e.target.value)}>
                                    <option value="-">Compra</option>
                                    <option value="+">Venda</option>
                                </select>
                            </div>
                            <div className="second-div">
                                <p>Nome da mercadoria</p>
                                <input type="text" placeholder="Input" onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="third-div">
                                <p>Valor</p>
                                <input type="number" placeholder="R$ 0,00" onChange={e => setPrice(e.target.valueAsNumber)}/>
                            </div>
                        </form>
                        <div className="button-div">
                            <p className="buttonAdd" onClick={()=>{handleProduct(plus, name, price)}}>Adicionar transação</p>
                        </div>
                        
                    </div>
                    <div className="statement">
                        <h2>Extrato de transações</h2>
                        <div className="div_01">
                            <p>Mercadoria</p>
                            <p>Valor</p>
                        </div>
                        {list.map((Element)=>{
                            return(
                            <div className="div_02" key={Element.id}>
                                    <div>
                                        <p>{Element.plus}</p>
                                        <p className="productName">{Element.name}</p>
                                    </div>
                                <p>{`R$ ${Element.price.toFixed(2)}`}</p>
                            </div>
                            )
                        })}
                        <div className="div_03">
                            <>
                            <div>
                                <p>Total</p>
                                <p>{`R$ ${totalPrice.toFixed(2)}`}</p>
                            </div>
                                {handleResult(totalPrice)}
                            </>
                        </div>
                    </div>
                </main>
            </div>
            <div className="bottonDiv"></div>
        </Style.HomeContainer>
    )
}

export default Home;