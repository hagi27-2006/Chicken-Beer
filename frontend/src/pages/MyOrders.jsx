import React, { useEffect, useState } from "react";
import { List, Card, Image, Typography, Divider, Spin, Empty } from "antd";
import { BASE_URL } from "../../constants.js";

const { Title, Text } = Typography;

function MyOrders({ orders }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}api/orders`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch orders");
        return res.json();
      })
      .then((json) => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <Spin className="flex justify-center mt-20" size="large" />;
  if (orders.length === 0)
    return <Empty className="mt-20" description="No orders yet" />;

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <Title level={2} className="mb-6">
        Миний захиалгууд
      </Title>
      <List
        grid={{ gutter: 24, column: 1 }}
        dataSource={orders}
        renderItem={(order) => (
          <List.Item>
            <Card title={`Захиалга #${order.id}`} bordered>
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between mb-4 border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      style={{ objectFit: "cover", borderRadius: 8 }}
                      preview={false}
                    />
                    <div>
                      <Text strong>{item.name}</Text>
                      <br />
                      <Text type="secondary">
                        {item.price}₮ × {item.quantity}
                      </Text>
                    </div>
                  </div>
                  <Text strong className="text-lg">
                    {item.price * item.quantity}₮
                  </Text>
                </div>
              ))}
              <Divider />
              <div className="flex justify-end">
                <Text strong className="text-xl">
                  Нийт: {order.total}₮
                </Text>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default MyOrders;
