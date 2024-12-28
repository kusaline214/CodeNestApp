"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";
import React from "react";

interface Email {
  id: string;
  subject: string;
  sender: string;
  preview: string;
  date: string;
  content: string;
}

const mockEmails: Email[] = [
  {
    id: "1",
    subject: "お知らせ：新しい機能の追加",
    sender: "info@example.com",
    preview: "こんにちは、新しい機能が追加されました。",
    date: "2024-12-25",
    content:
      "このメールは新しい機能に関するお知らせです。詳細については、公式サイトをご確認ください。",
  },
  {
    id: "2",
    subject: "お得なキャンペーンのご案内",
    sender: "campaign@example.com",
    preview: "今だけ特別価格でご提供中です。",
    date: "2024-12-24",
    content: "期間限定で特別価格で商品を提供しております。ぜひご確認ください。",
  },
  {
    id: "3",
    subject: "【重要】アカウントの確認が必要です",
    sender: "support@example.com",
    preview: "アカウントの安全のため、確認をお願いします。",
    date: "2024-12-23",
    content:
      "あなたのアカウントに不正アクセスの試みがありました。今すぐ確認してください。",
  },
];

const MailboxUI = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleEmailClick = (email: Email) => {
    setSelectedEmail(email);
  };

  const handleClose = () => {
    setSelectedEmail(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 1000,
        // margin: "auto",
        padding: "30px",
        mt: 4,
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        メールボックス
      </Typography>
      <hr />
      <br />

      <Card>
        <CardContent>
          <List>
            {mockEmails.map((email) => (
              <React.Fragment key={email.id}>
                <ListItem
                  onClick={() => handleEmailClick(email)}
                  component="button"
                >
                  <ListItemText
                    primary={email.subject}
                    secondary={`${email.sender} - ${email.date}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* メールの詳細ダイアログ */}
      <Dialog
        open={!!selectedEmail}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        {selectedEmail && (
          <>
            <DialogTitle>{selectedEmail.subject}</DialogTitle>
            <DialogContent>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                差出人: {selectedEmail.sender}
              </Typography>
              <Typography variant="body1">{selectedEmail.content}</Typography>
            </DialogContent>
            <Button onClick={handleClose} color="primary" sx={{ m: 2 }}>
              閉じる
            </Button>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default MailboxUI;
