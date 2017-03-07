import React, { Component } from 'react'
import styles from './examples.css'
import Paper from 'material-ui/Paper'
import Ionicon from 'react-ionicons'

class Examples extends Component {
  render() {
    const nodejsExample = `<Ionicon icon="ion-social-nodejs" fontSize="60px" color="#43853d" />`
    const loadExample = `<Ionicon icon="ion-load-c" fontSize="60px" color="#347eff" rotate={true} />`
    const loadLoopExample = `<Ionicon icon="ion-ios-loop-strong" fontSize="60px" rotate={true} />`
    const heartExample = `<Ionicon icon="ion-heart" fontSize="60px" color="red" beat={true} />`
    const bellExample = `<Ionicon icon="ion-ios-bell" shake={true} fontSize="60px" color="orange" />`
    return(
      <div className="examples">
        <h2>Examples</h2>
        <div className="examplesContainer">
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-social-nodejs" fontSize="60px" color="#43853d" />
            <pre>
              {nodejsExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-load-c" fontSize="60px" color="#347eff" rotate={true} />
            <pre>
              {loadExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-ios-loop" fontSize="60px" rotate={true} />
            <pre>
              {loadLoopExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-heart" fontSize="60px" color="red" beat={true} />
            <pre>
              {heartExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-ios-bell" shake={true} fontSize="60px" color="orange" />
            <pre>
              {bellExample}
            </pre>
          </Paper>
        </div>
      </div>
    )
  }
}

export default Examples
