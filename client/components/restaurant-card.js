import React from 'react'
import {Popup, Card, Image, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const RestaurantCard = props => {
  const restaurant = props.restaurant
  const reviews = restaurant.reviews
  const dollarSignHelper = expenseRating => {
    if (expenseRating === 0) return 'No Rating'
    return '$'.repeat(expenseRating)
  }
  const labelColor = score => {
    if (score >= 80) {
      return 'green'
    } else if (score >= 50) {
      return 'yellow'
    } else {
      return 'red'
    }
  }

  let color = labelColor(restaurant.score)

  return (
    <Link to={`/restaurant/${restaurant.id}`}>
    
    <Card>
      <div className="card-image">
        <Image src={restaurant.imageUrl} />
      </div>
      <Card.Content>
        <Card.Header>
          {restaurant.name}
          <span className="right floated">
            <Label color={color} key={color}>
              {restaurant.score}%
            </Label>
          </span>
        </Card.Header>
        <Card.Meta>{restaurant.location.slice(0, restaurant.location.indexOf(','))}...</Card.Meta>
        <Card.Description>
          {dollarSignHelper(restaurant.expenseRating)},{' '}
          {restaurant.cuisineType[0].title}
          <span className="right floated">
            <Popup trigger={<a>View Sources</a>} wide="very">
              {reviews.map(review => (
                <div key={review.id}>
                  <p>
                    {' '}
                    <img className="sourceLogo" src={review.sourceLogo} />{' '}
                    {review.source}: {review.rating}{' '}
                  </p>
                </div>
              ))}
            </Popup>
          </span>
        </Card.Description>
      </Card.Content>
    </Card>
   
    </Link>
  )
}

export default RestaurantCard
