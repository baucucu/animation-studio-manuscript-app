import React from 'react';
import { Page, Navbar, Block,Chip, CardHeader,CardFooter, SwiperSlide,Swiper,BlockTitle,CardContent,Link, Row, Col, List, ListItem, Card, Button } from 'framework7-react';

const HomePage = () => (
  <Page>
    {/* <Navbar title="Manuscript" /> */}
    {/* <BlockTitle>Manuscript</BlockTitle> */}
    <Block >
      <Row>
        <Col width="35">
          <List noHairlines>
            <ListItem>Client name</ListItem>
            <ListItem>Project name <Chip>Project status</Chip></ListItem>
            <ListItem>Manuscript writer</ListItem>
            <ListItem></ListItem>
            
          </List>
        </Col>
        <Col width="15">
          <List noHairlines>
            <ListItem>Language</ListItem>
            <ListItem>Word count</ListItem>  
          </List>  
        </Col>
        <Col width="15">
          <List noHairlines>
            <ListItem>Target video length:</ListItem>
            <ListItem>Number of scenes</ListItem>  
          </List> 
        </Col>
        <Col width="35">
          <Block>
            <Card>
              <p slot="header">Time left to respond <Chip>00:00:00:00</Chip></p>
              <p slot="content">Number of revisions <Chip >2/5</Chip></p>
              
              <Block slot="footer" style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Button small iconSize="small" iconF7="alarm_fill" outline color="blue" style={{marginRight:"16px"}}>Ask for revision</Button>
                <Button small iconSize="small" iconF7="checkmark_alt" raised fill color="green">Approve manuscript</Button>
              </Block>
            </Card>
          </Block>
          
        </Col>
      </Row>
    </Block>
    <Block style={{display:'flex', flexDirection: 'row'}}>
    <Swiper pagination navigation speed={500} slidesPerView={3} spaceBetween={20}>
    {[1,2,3,4,5,6].map( (card,id) => (
      <SwiperSlide>
        <Card key={id} className="demo-card-header-pic">
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
              Quisque eget vestibulum nulla. 
            </p>
          </CardContent>
          <CardFooter >
            <Button small fill raised color="green" iconF7="checkmark_alt" iconSize="small" style={{marginRight: '8px'}}>Approve</Button>
            <Button small outline color="blue" iconF7="bubble_left_bubble_right" iconSize="small">Comment</Button>
          </CardFooter>
        </Card>
      </SwiperSlide>))}
      
      
    </Swiper>
      
    </Block>
  </Page>
);

export default HomePage;
