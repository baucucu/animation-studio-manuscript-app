import React from 'react';
import { Page, Navbar, Block, BlockTitle, Row, Col, List, ListItem, Card, Button } from 'framework7-react';

const HomePage = () => (
  <Page>
    <Navbar title="Manuscript" />
    {/* <BlockTitle>Manuscript</BlockTitle> */}
    <Block strong>
      <Row>
        <Col width="33">
          <List>
            <ListItem>Client name</ListItem>
            <ListItem>Project name</ListItem>
            <ListItem>Manuscript writer</ListItem>
          </List>
        </Col>
        <Col width="33">
          <List>
            <ListItem>Target video length:</ListItem>
            <ListItem>Language</ListItem>
            <ListItem>Word count</ListItem>
            <ListItem>Number of scenes</ListItem>
            <ListItem>Target video length</ListItem>
          </List>
        </Col><Col width="33">
          <Block>
            <Card>
              <BlockTitle slot="header">Time left to respond <span slot="content">00:00:00:00</span></BlockTitle>
              
              <span slot="footer" style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <Button iconF7="alarm_fill" outline color="blue" style={{marginRight:"16px"}}>Ask for revision</Button>
                <Button iconF7="checkmark_alt" raised fill color="green">Approve manuscript</Button>
              </span>
            </Card>
            <Card></Card>
          </Block>
        </Col>
      </Row>
    </Block>
  </Page>
);

export default HomePage;
