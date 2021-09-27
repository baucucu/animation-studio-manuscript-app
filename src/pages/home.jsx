import React, {useEffect, useState} from 'react';
import { Page, Badge, Icon, Block,Chip, CardHeader,CardFooter, Gauge, SwiperSlide,Swiper,BlockTitle,CardContent,Link, Row, Col, List, ListItem, Card, Button } from 'framework7-react';

const HomePage = ({f7route, f7router}) => {

  return (
    <Page >
      <Block style={{marginBottom:0}}> 
        <Row>
          <Col width="40" >
            <Card className="elevation-4" style={{height:180}}>
              <List noHairlines style={{margin:0}} slot="content">
                <ListItem key="client">Client<Chip color="blue" outline>Client Name</Chip></ListItem>
                <ListItem key="project">Project<Chip color="blue">Project status</Chip><Chip color="blue" outline>{f7route.query.card}</Chip></ListItem>
                <ListItem key="manuscriptWriter">Manuscript writer<Chip color="blue" outline>Thomas Oddegaard</Chip></ListItem>
              </List>
            </Card>

          </Col>
          <Col width="30">
            <Card className="elevation-4" style={{height:180}}>
              <Row slot="content">
                <Col>
                  <List noHairlines style={{margin:0}}>
                    <ListItem key="language">Language<Chip color="blue">Swedish</Chip></ListItem>
                    <ListItem key="targetLength">Target length:<Chip color="blue">60s</Chip></ListItem>
                  </List>  
                </Col>
                <Col>
                  <List noHairlines style={{margin:0}}>
                    <ListItem key="wordCount">Word count<Chip color="blue">354</Chip></ListItem>  
                    <ListItem key="scenes">Scenes<Chip color="blue">8</Chip></ListItem>  
                  </List> 
                </Col>
              </Row>
              <CardFooter >
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                  <Button  slot="footer" iconF7="speaker_1_fill" small iconSize="small" color="purple" fill raised>Listen to AI Voiceover</Button>
                  <Badge color="white" tooltip="Tooltip text"><Icon size="medium"  color="black" f7="info_circle_fill"></Icon></Badge>
                </div>
                <Button fill raised color="purple" iconF7="cloud_download" small iconSize="small">Download PDF</Button>
              </CardFooter>
            </Card>
            
          </Col>
          <Col width="30">
            <Block style={{margin:0}}>
              <Card className="elevation-4" style={{height:180}}>
                
                <CardHeader style={{alignSelf: "center"}}>
                  Time left to respond: 
                  <Chip color="blue">00:00:00:00</Chip> 
                  <Button iconF7=""  small>Extend time</Button>
                </CardHeader>
                <CardContent style={{paddingBottom:0}}>
                  <Row style={{display: 'flex', marginBottom:0}} >
                    {/* <Col style={{display:"flex", flexDirection:"column",justifyContent: 'center'}}>
                      <Gauge
                        size={130}
                        
                        type="semicircle"
                        value={2/8}
                        valueText="2/8" 
                        valueTextColor="blue"
                        valueFontSize={24 }
                        borderColor="blue"
                        labelText="scenes"
                        labelTextColor="#333"
                        labelFontWeight={400}
                        // labelFontSize={12 }
                        borderWidth={10}
                      />
                    </Col> */}
                    <Col style={{display:"flex", flexDirection:"column",justifyContent: 'center'}}>
                      <Gauge
                        size={130}
                        
                        type="semicircle"
                        value={2/5}
                        valueText="2/5"
                        valueTextColor="blue"
                        valueFontSize={24 }
                        borderColor="blue"
                        labelText="revisions"
                        labelTextColor="#333"
                        labelFontWeight={400}
                        // labelFontSize={12 }
                        borderWidth={10}
                      />
                    </Col>
                  </Row>
                </CardContent>

                <CardFooter >
                    <Button small iconSize="small" iconF7="checkmark_alt" raised fill color="green">Approve manuscript</Button>
                    <Button small color="blue" style={{marginRight:"16px"}}>Ask for revision</Button>
                </CardFooter>
              </Card>
            </Block>
            
          </Col>
        </Row>
      </Block>
      <Block style={{display:'flex', flexDirection: 'row', margin:0}}>
        <Swiper  navigation speed={500} slidesPerView={3.33} spaceBetween={20}>
        {[1,2,3,4,5,6,7,8].map( (card,id) => (
          <SwiperSlide key={id}>
            <Card  className="demo-card-header-pic" className="elevation-4">
              <CardHeader
                className="no-border"
                valign="bottom"
                style={{
                  backgroundImage: 'url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)',
                  height: '200px',
                }}
              >
                {/* Journey To Mountains */}
              </CardHeader>
              <CardContent>
                <h2 className="scene">Scene #</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                
              </CardContent>
              <CardContent>
                <Icon f7="circle_grid_3x3"></Icon>
                Section name
              </CardContent>
              <CardContent>
                <Icon f7="circle_grid_3x3"></Icon>
                Section name
              </CardContent>
              <CardContent>
                <Icon f7="circle_grid_3x3"></Icon>
                Section name
              </CardContent>
              <CardContent>
                <Icon f7="circle_grid_3x3"></Icon>
                Section name
              </CardContent>
              <CardFooter >
                {/* <Button small fill raised color="green" iconF7="checkmark_alt" iconSize="small" style={{marginRight: '8px'}}>Approve</Button> */}
                <Button small  color="blue">Comment</Button>
              </CardFooter>
            </Card>
          </SwiperSlide>))}
        </Swiper>
      </Block>
    </Page>
)};

export default HomePage;
