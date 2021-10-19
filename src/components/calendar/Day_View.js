import React ,{useState,useEffect} from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';
import { Row, Col, Divider } from 'antd';
import DayStatus from './Day_Status';
import { LeftOutlined , RightOutlined , DownOutlined , CaretRightOutlined} from '@ant-design/icons';
import {ReactComponent as AddNote} from '../../assets/addNote.svg';
import { ReactComponent as RectangleIcon} from '../../assets/Rectangle.svg';
import ShowCampaign from './show_campaign';
import DayContent from './day_content';
import axios from 'axios';


const { Paragraph } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title,Text } = Typography;

const DayView = ({id,campaigntitle,campaignlogo}) => {
  const url='http://localhost:1337/campaigns';
  const [strapiData,setStrapiData] = useState([]);

  const fetchData = async ()=> {
    const response = await axios({
      method:'get',
      url
    });

    return response.data;

  }

  useEffect(()=>{
    fetchData()
             .then((val)=> {
               setStrapiData(val);
             })
             .catch((e)=> {
               console.log(e.message);
             })
  })
    return(
        <Layout>
        <Header className="header" style={{backgroundColor:'#ffffff'}}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
           
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Title style={{marginTop:'20px'}} level={4}>Marketing Calendar</Title>
          <Layout className="site-layout-background" style={{ padding: '8px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 500 ,backgroundColor:'#FFFFFF'}}>
            
            {/* <Layout style={{maxWidth:80 , marginTop:20 , backgroundColor:'#ffffff',display:'flex'}} >
             
            <LeftOutlined /> 
                  
            </Layout> */}
            <Row style={{paddingTop:'7px'}}>
              <Col   style={{paddingTop:'7px'}}>
              <Button  type="primary" style={{color:'#F57600',borderColor:'#F57600'}} ghost>
                Today
              </Button> 
              </Col>
              <Col style={{paddingLeft:'10px',paddingTop:'10px'}}>
                <LeftOutlined  />
                <RightOutlined style={{paddingLeft:'5px'}} />
              </Col>
              <Col><Paragraph style={{paddingTop:'10px',paddingLeft:'10px'}}>
                  16th December,2021
                   <DayStatus />
               </Paragraph></Col>
              
               
              
              {/* <Col span={6} offset={8} style={{marginTop:'20px',marginLeft:'648px',height:'47px'}}  >
              <DayStatus  />
              </Col> */}
            </Row>
            <Row>
              <Col>
              <Paragraph style={{color:'#929090'}}>
                Channel:
              </Paragraph>
              </Col>
              <Col>
                <Title style={{paddingLeft:'5px'}} level={5}>
                  All
                </Title>
              </Col>
              <Col style={{paddingLeft:'5px'}}>
              <DownOutlined />
              </Col>
              <Col>
                <Paragraph style={{color:'#929090', paddingLeft:'20px'}}>
                   Status:
                </Paragraph>
              </Col>
              <Col>
                <Title level={5} style={{paddingLeft:'5px'}}>
                  All
                </Title>
                </Col>

              <Col style={{paddingLeft:'5px'}}>
                <DownOutlined />
              </Col>

              <Col>
                <Paragraph style={{color:'#929090' , paddingLeft:'20px'}} >
                  Profile:
                </Paragraph>
              </Col>
              <Col>
                <Title  level={5} style={{paddingLeft:'5px'}}>
                  All
                  <DownOutlined style={{paddingLeft:'5px'}}/>
                </Title>
              </Col>
              

            </Row>
            <Divider  type='horizontal' style={{color:'#EEEEEE'}}/>

            <Row>
             <Col>
             <Title level={4}>
               16th December
             </Title>
             
             </Col>
            
             <Col style={{marginLeft:'835px'}}>
           
               <AddNote />
               
               <Text strong>Add Note</Text>
               
             </Col>
             </Row>
             
             <Row>
              <Col>
              <Text strong>
               Wednesday
             </Text></Col>
             <Col style={{display:'flex',marginLeft:550}}><ShowCampaign /></Col>
    
            
             
            </Row>
            <Divider />
            <Row>
              <Col>
              <Text strong style={{color:'#929090'}}>
                All Day
              </Text>
             
              </Col>
              <RectangleIcon style={{marginLeft:'35px'}}/>
              <Col>
              <Button style={{height:35,minWidth:150 , display:'flex',justifyContent:'space-between'}}>
                {strapiData.map((item)=>{
                  return <>
                           {item.day_view === "All Day" ? <img src={`http://localhost:1337${item.campaignlogo[0].url}`} /> : null}
                          {item.day_view === "All Day" ? item.campaigntitle : null}
                         

                        </>
                })}

              </Button>
              </Col>
            </Row>
            <Row>
              <Col>
              <Text strong style={{color:'#929090'}}>9:00 am</Text>
              
              <Col style={{marginLeft:65}}>
              {strapiData.map((item) => {
                  return <>
                         {
                           item.day_view === "9:00 am" ?  <Button style={{height:35,minWidth:150,marginLeft:'15px',marginTop:'7px',backgroundColor:'#BDC84D'}}>
                              { <img src={`http://localhost:1337${item.campaignlogo[0].url}`} />}
                             {item.campaigntitle}
                           </Button>
                           : null
                         }
                         
                        </>
                })}
                <Text underline strong style={{marginLeft:'20px'}}>+2 more</Text>

              </Col>
              </Col>
             
            </Row>
            <Row>
            <Col>
              <Text strong style={{color:'#929090'}}>9:30 am</Text>
              <Row><Divider dashed/></Row>
              </Col>
              <Col><CaretRightOutlined style={{marginLeft:'5px'}} />
               
                 <Col style={{marginLeft:'13px'}}>
                 {strapiData.map((item)=>{
                      return <>
                            {item.day_view === "9:30 am" ?  <Button style={{marginLeft:'15px',backgroundColor:'#BA5F98'}}>
                            { <img src={`http://localhost:1337${item.campaignlogo[0].url}`} />}
                              {item.campaigntitle}</Button> : null}
                            </>
                 })}
                 </Col>
              </Col>


            </Row>
            
            <Row>
            <Col>
              <Text strong style={{color:'#929090'}}>10:00 am</Text>
              <Col>
               {strapiData.map((item)=> {
                    return <>
                            {
                              item.day_view === "10:00 am" ?  <Button style={{height:35,minWidth:150,marginLeft:'78px',backgroundColor:'#0076D7'}}>
                            { <img src={`http://localhost:1337${item.campaignlogo[0].url}`} />}

                                {item.campaigntitle}</Button> : null
                            }
                           </>
               })}
              </Col>
              </Col>
            </Row>
            <Row>
            <Col>
              <Text strong style={{color:'#929090'}}>10:30 am</Text>
              </Col>
            </Row>
            <Row>
            <Col>
              <Text strong style={{color:'#929090'}}>11:00 am</Text>
              </Col>
            </Row>
            <Row>
            <Col>
              <Text strong style={{color:'#929090'}}>11:30 am</Text>
              </Col>
            </Row>
            <Row>
            <Col>
              <Text strong style={{color:'#929090'}}>12:00 am</Text>
              </Col>
            </Row>
            
             {/* <Row>
               <Col>
                  <DayContent />
                 
                  
               </Col>
               
             </Row> */}

                
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

      </Layout>

    )
}

export default DayView;