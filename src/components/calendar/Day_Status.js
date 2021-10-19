import React from 'react';
import { Row,Col,Divider, Layout,  } from 'antd';
import { Button , Radio } from 'antd';


const DayStatus = () => {
    return(
       <>

        <Radio.Group style={{marginLeft:600}}  >
          <Radio.Button value="large"  style={{border:'none'}}>Daily</Radio.Button>
          <Radio.Button value="default" style={{backgroundColor:'#FFE9E0',border:'none'}}>Weekly</Radio.Button>
          <Radio.Button value="small" style={{backgroundColor:'#FFE9E0',border:'none'}}>Monthly</Radio.Button>
        </Radio.Group>
       </>

    )

}

export default DayStatus;