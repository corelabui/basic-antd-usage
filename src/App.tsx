import { Input, Space, Button, Typography } from 'antd';
import { Form, useForm, connect } from 'formfusion';

const { Text } = Typography;

const MyForm = () => {
  const config = useForm({
    onSubmit: (e) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input
          {...connect(config, 'alphabetic')}
          id="firstName"
          name="firstName"
          label="First name"
          status={config.errors.firstName ? 'error' : ''}
          placeholder="Enter your first name"
        />
      </Space>
      <Text type="danger">{config.errors.firstName}</Text>
      <Space direction="vertical" style={{ width: '100%', marginTop: '15px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form>
  );
};

export default MyForm;
