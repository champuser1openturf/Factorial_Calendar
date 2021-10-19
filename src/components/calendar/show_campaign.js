import React , {useState,useEffect} from 'react';
import { Row , Col } from 'antd';
import { Card , Button} from 'antd';
import { Typography } from 'antd';
import axios from 'axios';

const {Text} = Typography;

const ShowCampaign = () => {
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
        <Row >
          {apiData.slice(0,2).map(({id,campaigntitle,campaignlogo}) => {
              return <>
                  <Button style={{minWidth:150,height:35,backgroundColor:'#D6D6D6',marginLeft:'15px'}}>
                  <Text>{campaigntitle}</Text>
                  </Button>
              </>
          })}
          <Button style={{width:100,height:35,alignItems:'center',marginLeft:'15px'}}>
              <Text underline >View all</Text></Button>
        </Row>
        </>
    )
}

export default ShowCampaign;