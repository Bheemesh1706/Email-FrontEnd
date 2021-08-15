import axi from "axios";
import { API_HOST } from "./config";


const sendTemplateData = async (data) => {
  try {
    console.log("template_axiso");
    console.log(data);
    const response = await axi.post(`${API_HOST}/emailtemplates`, {
      template: data,
    });
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

const getTemplateData = async () => {
  try {

     console.log("template_axiso");
     const response = await axi.get(`${API_HOST}/emailtemplates`);
     const data = await response.data[0].template;
     

     return data;

  } catch (error) {
    console.log(error.response);
  }
};
export { sendTemplateData, getTemplateData };
