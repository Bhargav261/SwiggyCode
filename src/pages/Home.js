import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    //Manage State
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState();
    const [copyData, setCopyData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [res, setRes] = useState({ searchText: '' });

    //Useeeffect
    useEffect(() => {
        loadData();
    }, [])

    //Functions

    //Load Data From API
    const loadData = async () => {

        try {
            const response = await axios.get(`https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef`);
            if (response.status == 200) {
                let item = response.data
                setData(item);
                setCopyData(item);
            } else {
                console.log("Something Went Wrong!!");
            }
        }
        catch (e) {
            console.log("Something Went Wrong!!");
        }
        setIsLoading(false);
    }

    //Onchnage Event

    const searchChange = (e) => {
        const { name, value } = e.target;

        let lowerCaseValue = value.toLowerCase();
        const searchData = copyData.filter(item => item.name.toLowerCase().includes(lowerCaseValue));

        setData(searchData);

        setRes({
            ...res,
            searchText: value
        })
    }

    //Add Button Click
    const buttonClick = (name) => {
        console.log("Name of Item is ", name)
    }

    //Clear Search
    const clearData = () => {
        setData(copyData);

        setRes({
            ...res,
            searchText: ''
        })
    }

    console.log("data :- ", data);

    return (
        <>
            <div className='justify-content-center flex'>
                <div>
                    <div className='mt-3 flex'>
                        {/* <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> */}
                        <input type="text" class="form-control input-border" name="search" value={res?.searchText} placeholder='Search Item' onChange={searchChange} />
                        {
                            res?.searchText != "" && (
                                <div className='iconDesign cursor-pointer' onClick={clearData}>
                                    <i className='fa fa-times'></i>
                                </div>
                            )
                        }

                    </div>
                    <div className='mt-3'>
                        {
                            isLoading ? (
                                <div className='justify-content-center flex'>Please Wait ...</div>
                            ) : (
                                <div className='itemBorder' >
                                    {
                                        data?.length > 0 ?

                                            data?.length > 0 && data.map((item, index) => (
                                                <>
                                                    <div key={index} className="borderbtm">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="">
                                                                    <div>{item.name}</div>
                                                                    <div className='mt-3'><b>₹{item.price}</b></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <img src={item.cloudinaryImageId} alt={item.name} style={{ width: '150px', height: '150px' }} />
                                                                <div className='justify-content-center flex mt-2'>
                                                                    <button type="button" className='buttonDesign' name="addButton" onClick={() => buttonClick(item.name)}>
                                                                        Add <i className='fa fa-plus font-13'></i>
                                                                        </button>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                            ))
                                            : <div className='mb-3 justify-content-center flex'>Item Not Found !!</div>
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;