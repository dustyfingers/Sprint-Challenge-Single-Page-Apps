import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CustomCard = ({ header, meta, desc, image }) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{header}</Card.Header>
      <Card.Meta>
        <span className='date'>{meta}</span>
      </Card.Meta>
      <Card.Description>
        {desc}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CustomCard;
