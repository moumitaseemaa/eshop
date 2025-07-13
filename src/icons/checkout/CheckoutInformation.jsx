import InputBox from "../../components/commonLayouts/InputBox";

const CheckoutInformation = () => {
  return (
    <div className="w-[60%]">
      <h3 className="font-['Poppins'] font-semibold text-4xl leading-11.5 text-[#303030] mb-2">
        Billing Details
      </h3>
   <div className="flex flex-wrap justify-between">
       <div className="w-[49%]">
        <InputBox labelName={'First Name'} placeholder={'Amelia Robert'} required={true}/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'Last Name'} placeholder={'Watson'} required={true}/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'Phone Number'} placeholder={'+123 456 7890'} required={true} type="number"/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'Email Address'} placeholder={'amelia.watson@eshop.com'} required={true} type="email"/>
      </div>
       <div className="w-[100%]">
        <InputBox labelName={'Address'} placeholder={'Home Address, Auxiliary St. 12345, Anywhere State'} required={true}/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'Country'} placeholder={'Indonesia'} required={true}/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'State'} placeholder={'Kalimantan Timur'} required={true}/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'City'} placeholder={'Samarinda'} required={true}/>
      </div>
       <div className="w-[49%]">
        <InputBox labelName={'ZIP Code'} placeholder={'555555'} />
      </div>
       <div className="w-[100%]">
        <InputBox labelName={'Order Notes'} placeholder={'Enter your order notes ...'} typeTwo="textarea" height={'174px'} />
      </div>
   </div>
    </div>
  );
};

export default CheckoutInformation;
