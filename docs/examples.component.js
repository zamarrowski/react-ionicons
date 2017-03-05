import React, { Component } from 'react'
import styles from './examples.css'
import Paper from 'material-ui/Paper'
import Ionicon from 'react-ionicons'

class Examples extends Component {
  render() {
    const nodejsExample = `<Ionicon icon="ion-social-nodejs" fontSize="60px" color="#43853d"></Ionicon>`
    const loadExample = `<Ionicon icon="ion-load-c" fontSize="60px" color="#347eff" rotate={true}></Ionicon>`
    const loadLoopExample = `<Ionicon icon="ion-ios-loop-strong" fontSize="60px" rotate={true}></Ionicon>`
    const heartExample = `<Ionicon icon="ion-heart" fontSize="60px" color="red"></Ionicon>`
    const bellExample = `<Ionicon icon="ion-ios-bell" shake={true} fontSize="60px" color="orange"></Ionicon>`
    return(
      <div className="examples">
        <h2>Examples</h2>
        <div className="examplesContainer">
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-social-nodejs" fontSize="60px" color="#43853d"></Ionicon>
            <pre>
              {nodejsExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-load-c" fontSize="60px" color="#347eff" rotate={true}></Ionicon>
            <pre>
              {loadExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-ios-loop-strong" fontSize="60px" rotate={true}></Ionicon>
            <pre>
              {loadLoopExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-heart" fontSize="60px" color="red"></Ionicon>
            <pre>
              {heartExample}
            </pre>
          </Paper>
          <Paper className="example" zDepth={2}>
            <Ionicon icon="ion-ios-bell" shake={true} fontSize="60px" color="orange"></Ionicon>
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
