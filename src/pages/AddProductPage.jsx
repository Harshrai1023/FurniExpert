import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ModelUpload from "../components/ModelUpload";
export const AddProductPage = () => {
  // State variables with proper initial values
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('');
  const [regularPrice, setRegularPrice] = useState(1);
  // const [salePrice, setSalePrice] = useState(0); 
  const [tax, setTax] = useState(0);
  const [saleLabel, setSaleLabel] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      productName,
      description,
      quantity,
      category,
      regularPrice,
      // salePrice,
      tax,
      saleLabel,
    };
    console.log(formData);

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-8 ">
          <div className="col-span-2 hidden md:block pt-9 pl-4">
            <Typography>Details</Typography>
            <Typography>Title, short description, image...</Typography>
          </div>

          <Card className="m-4 col-span-6">
            <div className="flex flex-col m-5 gap-4">
              <Typography variant="h5">Details</Typography>
              <Input
                type="text"
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <Textarea
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <ImageUpload />
            </div>
          </Card>
          <div className="col-span-2 hidden md:block pt-9 pl-4">
            <Typography>Properties</Typography>
            <Typography>Additional functions and attributes...</Typography>
          </div>
          <Card className="m-4 col-span-6">
            <div className="flex flex-col m-5 gap-4">
              <Typography variant="h5">Properties</Typography>
              <Input
                type="number"
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Select
                label="Category"
                onChange={(e) => setCategory(e)}
              >
                <Option value="Bedroom">Bedroom</Option>
                <Option value="Sofa">Sofa</Option>
                <Option value="Chair">Chair</Option>
                <Option value="Table">Table</Option>
                <Option value="Lamp">Lamp</Option>
                <Option value="Others">Others</Option>
              </Select>
              <ModelUpload />
              <div className="flex gap-2">
                <Switch
                  checked={saleLabel}
                  onChange={(e) => setSaleLabel(e.target.checked)}
                />
                <Typography>Sale Label</Typography>
              </div>
            </div>
          </Card>
          <div className="col-span-2 hidden md:block pt-9 pl-4">
            <Typography>Pricing</Typography>
            <Typography>Price related inputs</Typography>
          </div>
          <Card className="m-4 col-span-6">
            <div className="flex flex-col m-5 gap-4">
              <Typography variant="h5">Pricing</Typography>
              <Input
                type="number"
                label="Regular Price"
                value={regularPrice}
                onChange={(e) => setRegularPrice(e.target.value)}
              />
              {/* <Input
                type="number"
                label="Sale Price"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
              /> */}
              <Input
                type="number"
                label="Tax(%)"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
            </div>
          </Card>
        </div>
        <div className="flex justify-end p-5">
          <Button type="submit">Create Product</Button>
        </div>
      </div>
    </form>
  );
};
