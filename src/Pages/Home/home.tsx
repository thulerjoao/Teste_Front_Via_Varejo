import * as Style from "./style"
import Logo from "../../assets/images/Logo-header.png";
import { useState } from "react"

// const [transaction, setTransaction] = useState<string>("")
// const [name, setName] = useState<string>("")
// const [value, setValue] = useState<number>()


// const handleProducts = (transaction:string, name:string, value:number) =>{
    
// }

const Home = () =>{
    return(
        <Style.HomeContainer>
            <div className="topDiv"></div>
            <div className="mainDiv">
                <header>
                    <img src={Logo}/>
                    <h1>Controle financeiro</h1>
                    <div>
                        <p>Dashbord</p>
                        <p className="bar"></p>
                        <p>Resumo</p>
                        <p className="bar"></p>
                        <p>Configurações</p>
                    </div>
                </header>
                <main>
                    <div className="newTransaction">
                        <h2>Nova Transação</h2>
                        <form action="">
                            <p>Tipo de transação</p>
                            <select>
                                <option value="+">Compra</option>
                                <option value="-">Venda</option>
                            </select>
                            <p>Nome da mercadoria</p>
                            <input type="text" placeholder="Input"/>
                            <p>Valor</p>
                            <input type="number" placeholder="R$ 0,00"/>
                            <button>Adicionar transação</button>
                        </form>
                    </div>
                    <div className="statement">
                        <h2>Extrato de transações</h2>
                        <div>
                            <p>Mercadoria</p>
                            <p>Valor</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </main>
            </div>
            <div className="bottonDiv"></div>
            
        </Style.HomeContainer>
    )
}

export default Home;