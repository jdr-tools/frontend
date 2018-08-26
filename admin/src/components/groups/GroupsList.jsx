import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'

/**
 * Presentational class for a list of groups, the request being made in its own container.
 * @author Vincent Courtois <courtois.vincent@outlook.com>
 */
export default function GroupsList (state) {
  if (state.groups.length <= 0) {
    return <Paper>Rien à afficher</Paper>
  }
  else {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Droits</TableCell>
              <TableCell>Routes</TableCell>
              <TableCell>Par défaut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              state.groups.map((group) => {
                return (
                  <TableRow>
                    <TableCell>{group.id}</TableCell>
                    <TableCell>{group.rights}</TableCell>
                    <TableCell>{group.routes}</TableCell>
                    <TableCell>{group.is_default}</TableCell>
                    <TableCell>actions à venir</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}