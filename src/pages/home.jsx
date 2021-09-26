import React from 'react';
import { Page, Navbar, Block,Chip, CardHeader,CardFooter, Gauge, SwiperSlide,Swiper,BlockTitle,CardContent,Link, Row, Col, List, ListItem, Card, Button } from 'framework7-react';

const HomePage = () => (
  <Page>
    <Block style={{marginBottom:0}}> 
      <Row>
        <Col width="40" >
          <Card className="elevation-4">
            <List noHairlines style={{margin:0}} slot="content">
              <ListItem>Client name</ListItem>
              <ListItem>Project name<Chip color="blue">Project status</Chip></ListItem>
              <ListItem>Manuscript writer<Chip color="blue">Thomas Oddegaard</Chip></ListItem>
            </List>
          </Card>

        </Col>
        <Col width="30">
          <Card className="elevation-4">
            <Row slot="content">
              <Col>
                <List noHairlines style={{margin:0}}>
                  <ListItem>Language<Chip color="blue">Swedish</Chip></ListItem>
                  <ListItem>Target length:<Chip color="blue">60s</Chip></ListItem>
                </List>  
              </Col>
              <Col>
                <List noHairlines style={{margin:0}}>
                  <ListItem>Word count<Chip color="blue">354</Chip></ListItem>  
                  <ListItem>Scenes<Chip color="blue">8</Chip></ListItem>  
                </List> 
              </Col>
            </Row>
            
            <Button  slot="footer" iconF7="speaker_1_fill" small iconSize="small" color="purple" fill raised>Listen to AI Voiceover</Button>
          </Card>
          
        </Col>
        <Col width="30">
          <Block style={{margin:0}}>
            <Card className="elevation-4">
              
              <CardHeader style={{alignSelf: "center"}}>Time left to respond: <Chip color="blue">00:00:00:00</Chip> </CardHeader>
              <CardContent style={{paddingBottom:0}}>
                <Row style={{display: 'flex', marginBottom:0}} >
                  <Col style={{display:"flex", flexDirection:"column",justifyContent: 'center'}}>
                    <Gauge
                      size={130}
                      
                      type="semicircle"
                      value={2/8}
                      valueText="2/8"
                      valueTextColor="blue"
                      // valueFontSize={10}
                      borderColor="blue"
                      labelText="scenes"
                      labelTextColor="#333"
                      labelFontWeight={400}
                      // labelFontSize={12 }
                      borderWidth={10}
                    />
                  </Col>
                  <Col style={{display:"flex", flexDirection:"column",justifyContent: 'center'}}>
                    <Gauge
                      size={130}
                      
                      type="semicircle"
                      value={2/5}
                      valueText="2/5"
                      valueTextColor="blue"
                      // valueFontSize={10}
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

              <CardFooter>
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
        <SwiperSlide>
          <Card key={id} className="demo-card-header-pic" className="elevation-4">
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
              <p className="date">Posted on January 21, 2015</p>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              
            </CardContent>
            <CardFooter >
              <Button small fill raised color="green" iconF7="checkmark_alt" iconSize="small" style={{marginRight: '8px'}}>Approve</Button>
              <Button small  color="blue">Comment</Button>
            </CardFooter>
          </Card>
        </SwiperSlide>))}
      </Swiper>
    </Block>
  </Page>
);

export default HomePage;
