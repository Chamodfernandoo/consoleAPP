import chalk from 'chalk';
import fs from 'fs';

export const addGuest = (name,address,age,date) => {
  const guests=lordGuest();
  const length=guests.length;
  let id=1;
  if (length>0){
    id=guests[length-1].id+1;
  }
  guests.push({
    id:id,
     name:name,
    address:address,
    age:age,
    date:date
  });
  saveGuest(guests);
  console.log(chalk.green('data saved!'));
};

export const updateGuest = (id,name,address,age,date) => {
  const guests = lordGuest();
  const guestIndex= guests.findIndex((guest)=>guest.id===id);
  //console.log(guestIndex);
  if(guestIndex!=-1){
    const guest=guests[guestIndex];
    /*if(name){
    console.log(name);
    }else{
      console.log("no name");
    }*/
   /*similar to ^ if else statement
   const n=name ? name:"no name";*/
   //similar to ^ if else statement
    guest.name =name ? name:guest.name;
    guest.address =address ? address:guest.address;
    guest.age =age ? age:guest.age;
    guest.date =date ? date:guest.date;
    console.log(chalk.yellow("Record Update",id));
    saveGuest(guests);
  }else{
    console.log(chalk.yellow.inverse("no record found!"));
  }
}
export const deleteGuest = (id) => {
  const guests=lordGuest();
  const newGusts = guests.filter((guest)=>{
    return guest.id!=id;
  })
  if(guests.length>newGusts.length){
    saveGuest(newGusts);
    console.log(chalk.white('deleting',id));
  }else{
    console.log(chalk.blue.inverse("no record found!"));
  }

};

export const readGuest = (id) => {
  console.log(chalk.blue('reading'));
  const guests=lordGuest();
  const guest= guests.find((guest)=>{
      return guest.id===id
  });
  if(guest){
    console.log(guest);
  }else{
    console.log(chalk.blue.inverse("no record found!"));
  }
 
};

export const listGuest = () => {
  console.log(chalk.yellow('guest list'));
  const guests=lordGuest();
  guests.forEach((guest)=>{
    console.log(guest);
  });
};

const db_file="data.json";
const saveGuest=(guests)=>{
const JSONdata= JSON.stringify(guests)
fs.writeFileSync(db_file,JSONdata);
}

const lordGuest=()=>{
  try{
      const databuffer=fs.readFileSync(db_file);
      const jdata= databuffer.toString();
      const data= JSON.parse(jdata)
      return data;
  }
  catch(err){
      return [];
  }
}