"use client";

import { Form, Input, Button, message, Card } from "antd";
import { MailOutlined, UserOutlined, MessageOutlined } from "@ant-design/icons";

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form ma'lumotlari:", values);
    message.success("Xabaringiz yuborildi! 🎮");
    form.resetFields();
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#ff00ff] tracking-wide">
          Biz bilan bog‘lanish
        </h2>

        <div className="flex justify-center">
          <Card
            className="w-full max-w-lg bg-transparent border border-[#ff00ff]/40 rounded-2xl shadow-[0_0_20px_#ff00ff40] backdrop-blur-md"
            bordered={false}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label={<span className="text-white font-medium">Ismingiz</span>}
                name="name"
                rules={[{ required: true, message: "Iltimos, ismingizni kiriting!" }]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "#ff00ff" }} />}
                  placeholder="Ismingiz"
                  className="h-11 bg-transparent border-[#ff00ff]/50 text-white placeholder-gray-400 focus:border-[#ff00ff] hover:border-[#ff00ff] rounded-lg"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-white font-medium">Email</span>}
                name="email"
                rules={[
                  { required: true, message: "Email manzilingizni kiriting!" },
                  { type: "email", message: "Email manzil noto‘g‘ri!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined style={{ color: "#ff00ff" }} />}
                  placeholder="email@example.com"
                  className="h-11 bg-transparent border-[#ff00ff]/50 text-white placeholder-gray-400 focus:border-[#ff00ff] hover:border-[#ff00ff] rounded-lg"
                />
              </Form.Item>

              <Form.Item
                label={<span className="text-white font-medium">Xabaringiz</span>}
                name="message"
                rules={[{ required: true, message: "Xabar matnini kiriting!" }]}
              >
                <Input.TextArea
                  rows={5}
                  placeholder="Xabaringizni yozing..."
                  className="bg-transparent border-[#ff00ff]/50 text-white placeholder-gray-400 focus:border-[#ff00ff] hover:border-[#ff00ff] rounded-lg"
                />
              </Form.Item>

              <Form.Item className="text-center mt-8">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#ff00ff] hover:bg-[#cc00cc] text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 shadow-[0_0_15px_#ff00ff80] hover:shadow-[0_0_25px_#ff00ff]"
                >
                  Yuborish
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
