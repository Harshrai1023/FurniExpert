import {
  Button,
  Card,
  Input,
  Switch,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import ImageUpload from "../components/ImageUpload";
export const AddProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-8 ">
        <div className="col-span-2 hidden md:block pt-9 pl-4">
          <Typography>Details</Typography>
          <Typography>Title, short description, image...</Typography>
        </div>

        <Card className="m-4 col-span-6">
          <div className="flex flex-col m-5 gap-4">
            <Typography variant="h5">Details</Typography>
            <Input label="Product Name" />
            <Textarea label="Description" />
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
            <Input label="Quantity" />
            <Input label="Category" />
            <Textarea label="Specification" />
            <div className="flex gap-2">
              <Switch />
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
            <Input label="Regular Price" />
            <Input label="Sale Price" />
            <Input label="Tax(%)" />
          </div>
        </Card>
      </div>
      <div className="flex justify-end p-5">
        <Button>Create Product</Button>
      </div>
    </div>
  );
};
