import { Container, Card, CardContent, Typography } from "@mui/material";
import ItemsTable from "./ItemsTable";
import { useStore } from "../zustandStore";

function ItemsList() {
  const { items } = useStore();

  return (
    <Container>
      {items.map((item) => (
        <Card key={item.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <ItemsTable />
    </Container>
  );
}

export default ItemsList;
