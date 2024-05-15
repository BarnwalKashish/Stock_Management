import React, { useEffect, useState } from 'react';
import { Button, List, ListItem, ListItemText, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [stocks, setStocks] = useState<string[]>([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await axios.get<string[]>('/api/stocks');
      setStocks(response.data);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleAddStock = async () => {
    const symbol: string | null = prompt('Enter stock symbol:');
    if (symbol) {
      try {
        await axios.post('/api/add-stock', { symbol });
        fetchStocks();
      } catch (error: any) {
        console.error(error);
      }
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h4" align="center" gutterBottom>
          Dashboard
        </Typography>
        <Button variant="contained" onClick={handleAddStock} fullWidth style={{ marginBottom: '1rem' }}>
          Add Stock
        </Button>
        <List>
          {stocks.map((stock: string, index: number) => (
            <ListItem key={index}>
              <ListItemText primary={stock} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
