interface AuthInputProps {
  label: string;
  value: any;
  verifyValue?:boolean;
  type?: 'text' | 'email' | 'password';
  changeValue: (newValue: any) => void;
}

export default function AuthInput (props:AuthInputProps) {
  return (
    <div className="flex flex-col">
      <label>{props.label}</label>
      <input type={props.type??'text'}
      value={props.value}
      required={props.verifyValue}
      onChange={e => props.changeValue?.(e.target.value)}
      className="p-1 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline mt-1"/>
    
    </div>
  );
};