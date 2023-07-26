import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import styles from "../styles/instructions.module.css";

const Instructions = () => {
  return (
    <List dense className={styles.list}>
      <ListItem className={`${styles.linstructions} ${styles.yellow}`}>
        <ListItemText
          className={styles.text}
          primary="Not started"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
      <ListItem className={`${styles.linstructions} ${styles.green}`}>
        <ListItemText
          primary="On Progress"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
      <ListItem className={`${styles.linstructions} ${styles.gray}`}>
        <ListItemText
          primary="Completed"
          primaryTypographyProps={{ variant: "caption" }}
        />
      </ListItem>
    </List>
  );
};

export default Instructions;
