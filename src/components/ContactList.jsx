import React, { useState } from "react";
import phoneStore from "../stores/phoneStore";
import { Input, Box, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ContactList = () => {
  const { phoneBook, deleteContact, changeContact } = phoneStore();
  const [searchValue, setSearchValue] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleChage = (id, itemName, itemPhoneNum) => {
    changeContact(id, name || itemName, phone || itemPhoneNum);
  };

  const filteredList = phoneBook.filter((item) =>
    item.name.includes(searchValue)
  );

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <SearchIcon sx={{ mr: 1 }} />
        <Input
          placeholder="Search by name or number"
          sx={{ width: 250 }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Box>
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <Box
            key={item.id}
            display="flex"
            flexDirection="column"
            mb={2}
            p={2}
            border={1}
            borderColor="grey.300"
            borderRadius={2}
          >
            {/* 상단 영역: 이름 + 버튼 */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <img
                  src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MTBfMTY1/MDAxNTkxNzQ2ODcyOTI2.Yw5WjjU3IuItPtqbegrIBJr3TSDMd_OPhQ2Nw-0-0ksg.8WgVjtB0fy0RCv0XhhUOOWt90Kz_394Zzb6xPjG6I8gg.PNG.lamute/user.png?type=w800"
                  width={50}
                  height={50}
                  alt="profile"
                  style={{ borderRadius: "50%" }}
                />
                <Box>
                  {item.editMode ? (
                    <Input
                      placeholder={item.name}
                      variant="soft"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  ) : (
                    <Typography variant="body1" fontWeight="bold">
                      {item.name}
                    </Typography>
                  )}
                  {item.editMode ? (
                    <Input
                      placeholder={item.phoneNumber}
                      variant="soft"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  ) : (
                    <Typography variant="body1" fontWeight="bold">
                      {item.phoneNumber}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* 수정/삭제 버튼 */}
              <Box display="flex" gap={1}>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() =>
                    handleChage(item.id, item.name, item.phoneNumber)
                  }
                >
                  {item.editMode ? "저장" : "수정"}
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => deleteContact(item.id)}
                >
                  삭제
                </Button>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Typography variant="body2" color="textSecondary">
          검색 결과가 없습니다.
        </Typography>
      )}
    </Box>
  );
};

export default ContactList;
