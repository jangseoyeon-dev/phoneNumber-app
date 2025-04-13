import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import phoneStore from "../stores/phoneStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = phoneStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) return;
    addContact(name, phoneNumber);
    setName(""); // 입력 초기화
    setPhoneNumber("");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
      p={3}
      border={1}
      borderColor="grey.300"
      borderRadius={2}
      boxShadow={2}
    >
      <TextField
        fullWidth
        id="name"
        label="이름"
        variant="standard"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        id="phone-number"
        type="tel"
        label="전화번호"
        variant="standard"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={{ width: "100%" }}
        onClick={handleAddContact}
      >
        연락처 추가
      </Button>
    </Box>
  );
};

export default ContactForm;
