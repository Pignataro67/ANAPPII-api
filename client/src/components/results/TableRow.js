import React, { Component } from 'react';
import Button from '../Button';
import { Table } from 'semantic-ui-react';

export default class TableRow extends Component {

    render() {
      return (
        <Table.Row>
          <Table.Cell>{this.props.estimate.type}</Table.Cell>
          <Table.Cell>{this.props.estimate.costEstimate}</Table.Cell>
        </Table.Row>
      )
    }
}