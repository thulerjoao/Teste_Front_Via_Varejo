import styled from "styled-components"

export const HomeContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
    

    .topDiv{
        width: 100vw;
        background-color: #E0E0E0;
        height: 80px;
        position: absolute;
        top: 0;
    }

    .bottonDiv{
        position: fixed;
        width: 100vw;
        background-color: #333333;
        height: 8px;
        bottom: 0;
    }

    .mainDiv{
        width: 1100px;
        z-index: 1;
        padding: 0;
    }


    header{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        top: 0;
        width: 100%;
        height: 80px;

        

        img{
            width: 40px;
            height: 36.84px;
            left: 0px;
            top: 22px;
        }

        h1{
            width: 411px;
            height: 43px;
            margin-left: 20px;

            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            display: flex;
            align-items: center;
        }

        div{
            position: absolute;
            width: 350px;
            height: 40px;
            right: 0;
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            align-items: center;
            background-color: #ffffff;

            

            p{
                height: 20px;
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                cursor: pointer;
            }

            .bar{
                border: 1px solid #979797;
                cursor: default;
            }
        }
    }

    main{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    
        .newTransaction{
            margin-top: 30px;
            box-sizing: border-box;
            width: 400px;
            height: 344px;
            border: 1px solid #979797;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            align-items: center;

        

            h2{
                width: 174px;
                height: 20px;
                margin-top: 20px;
                font-weight: 700;
                font-size: 18px;
                text-align: center;
            }

            form{
                box-sizing: border-box;
                width: 100%;
                padding: 0 15px;
                margin-top:21px;

                p{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                }

                select{
                    width: 100%;
                    box-sizing: border-box;
                    height: 32px;
                    padding: 0 5px;
                    border: 1px solid #979797;
                    border-radius: 4px;
                    margin-top: 3px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    
                }

                input{
                    width: 100%;
                    box-sizing: border-box;
                    height: 32px;
                    padding-left: 12px;
                    margin-bottom: 21px;
                    border: 1px solid #979797;
                    border-radius: 4px;
                    
                }
                input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type=number] {
                    -moz-appearance: textfield;
                }

                .buttonAdd{
                    width: 100%;
                    height: 32px;
                    box-sizing: border-box;
                    background: #333333;
                    color: #ffffff;
                    border-radius: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    font-family: 'Inter';
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                    cursor: pointer;
                }
            }
        }

        .statement{
            box-sizing: border-box;
            width: 680px;
            min-height: 281px;
            margin-top: 30px;
            margin-bottom: 2rem;
            margin-left: 20px;
            text-align: center;

            h2{
                height: 20px;
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                margin-top: 21px;
            }

            .div_01{
                display: flex;
                flex-direction:row;
                margin-top: 18px;
                width: 100%;
                justify-content: space-between;
                text-align: center;
                box-sizing: border-box;
                padding-left: 40px;
                padding-right: 20px;
                border-bottom: 1px solid #979797;

                p {
                    height: 22px;           
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 22px;
                }
            }

            .div_02{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 8px 20px;
                border-bottom: 1px solid #979797;

                p{
                    min-height: 18px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                }
                
                div{
                    display: flex;
                    flex-direction: row;

                    .productName{
                    margin-left: 11px;
                    max-width: 500px;
                    } 
                }               
            }

            .div_03{
                margin-top: 3px;
                border-top: 1px solid #979797;
                display: flex;
                flex-direction: column;

                div{
                    margin-top: 11px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-left: 40px;
                    padding-right: 20px;
      
                    height: 18px;                       
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16px;
                                    }

                .result{
                    box-sizing: border-box;
                    width: 100%;
                    text-align: end;
                    padding-right: 20px;
                      
                    font-weight: 400;
                    font-size: 10px;
                    line-height: 22px;
                    margin-top: -6px;
                }
            }
            
        }
    }

`