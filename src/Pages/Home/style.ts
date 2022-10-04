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
        margin: 0 20px;
    }


    header{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        top: 0;
        width: 100%;
        height: 80px;   

        label{
            display: none;
            align-items: center;
            height: 12px;
            width: 18px;
            cursor: pointer;
        }
        

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

        .nav-container{
            position: absolute;
            width: 350px;
            height: 40px;
            right: 0;
            background-color: #ffffff;
            display: flex;
            flex-direction: row;
            align-items: center;

            

            img{
                display: none;
            }

            ul{
                width: 100%;
                list-style: none;
                display: flex;
                justify-content: space-evenly;
                flex-direction: row;
                align-items: center;
                cursor: pointer;

                li p{
                    height: 20px;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 19px;
                }
    
                .bar{
                    border: 1px solid #979797;
                    cursor: default;
                    height: 20px;
                }

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
            }
            .button-div{
                width: 100%;
                display: flex;
                justify-content: center;
                
                .buttonAdd{
                        width: calc(100% - 30px);
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
            width: calc(100% - 420px);
            min-width: 600px;
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

    @media screen and (max-width: 768px) {

        .topDiv{
            height: 60px;
        }

        header{
            justify-content: space-between;
            height: 60px;

            img{
                width: 30px;
                height: 30px;
            }

            h1{
                margin-left: 0;
                justify-content: center;
            }

            label{
                display: flex;
            }

            .nav-container{
                visibility: hidden;
                transition: all 0.4s;
                top:0;
                width: 252px;
                height: 100vh;
                margin-right: -272px;
                background-color: #333333;
                display: none;
                justify-content: flex-start;
                flex-direction: column;
                align-items: flex-start;

            

                
                img{
                    display: flex;
                    width: 17px;
                    height: 18px;
                    margin: 20px;
       
                }

                ul{
                    width: 100%;
                    height: 100%;
                    list-style: none;
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: column;
                    align-items: flex-end;
                    cursor: pointer;

                    li {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        color: #ffffff;
                        height: 32px;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 19px;
                        padding-right: 20px;
                        box-sizing: border-box;
                        margin-top: 2px;
                        margin-bottom: 5px;
                    }

                    li:hover{
                        background-color: #C4C4C4;
                        color: #333333;
                    }

                    p{
                        display: none;
                    }
        
                    .bar{
                        border: 1px solid #979797;
                        cursor: default;
                        height: 20px;
                    }

                }

            } 
            
            .nav-open{   
                display: flex;
                margin-right: -20px;
                visibility: visible;
            }
        }

        main{
            .newTransaction{
                min-width: calc(94.79% + 40px);
                height: 189px;
                margin-top: 20px;


                form{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 0 15px;
                margin-top:21px;



                p{
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 22px;
                }

                .first-div{
                    min-width: 150px;
                    margin-left: 5px;
                }
                
                .second-div{
                    width: 100%;
                    margin: 0 20px;
                    box-sizing: border-box;
                }

                .third-div{
                    min-width: 150px;
                    margin-right: 5px;
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

                }

                .button-div{
                    justify-content: flex-end;

                    .buttonAdd{
                    width: 200px;
                    margin-right: 20px;
                    }
                }
                
            }

            .statement{
            width: 100%;
            margin: 23px 0;
        }

        }

        

    }



`