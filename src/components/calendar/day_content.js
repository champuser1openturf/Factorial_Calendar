import React , { useState , useEffect } from 'react';
import axios from 'axios';
import {Row,Col,Button} from 'antd';
import { Typography } from 'antd';

const {Text} = Typography;

const DayContent = () => {
    const url = 'http://localhost:1337/campaigns';
    const [apiData,setAPIData] = useState([]);

    const fetchStrapiData = async () => {
        const response = await axios({
            method:'get',
            url
        });

        return response.data;
    }

    useEffect(() => {
        fetchStrapiData()
                     .then((val) => {
                         setAPIData(val)
                     })
                     .catch((e) => {
                         console.log(e.message);
                     })
    },[])
    return(
        <>
          {
                  apiData.map((item) => {
                    return <>
                        <Col>
                        <Text strong style={{color:'#929090'}}>
                            {item.day_view}
                           
                         </Text>
                         <Col>
                         <Button style={{height:35,minWidth:150,marginLeft:45}}>
                                  {item.campaigntitle}
                              </Button>
                         </Col>
                         
                        </Col>
                    </>
                  })
                }
        </>
    )
}


export default DayContent;