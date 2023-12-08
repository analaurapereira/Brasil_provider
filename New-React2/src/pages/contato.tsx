import React, { useState } from 'react';
import {
  FormContainer,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from '../styles/contato';


export const Contato: React.FC = () => {
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>(null);


    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();
        
        // Enviar o formulário para o servidor 
        const formData = new FormData();
        formData.append('lastname', lastname);
        formData.append('company', company);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('description', description);
        
        if (file) {
            formData.append('file_1_1', file);
        }

        // Enviar formData para o servidor
        console.log('Enviando dados para o servidor:', formData);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };


    return (
        <FormContainer>
              <form id="_vtigerWebForm" name="Contato Website BP" action="https://bp-apps.com.br/crm/bp/modules/Webforms/capture.php" method="post" acceptCharset="utf-8" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="hidden" name="vtrftk" value="sid:bf8c01172f14715f800595d698a6a7d0a348401e,1698008067" />
                <input type="hidden" name="publicid" value="4e4e221521657ef555af17a85443a06f" />
                <input type="hidden" name="urlencodeenable" value="1" />
                <input type="hidden" name="name" value="Contato Website BP" />
                <table>
                    <tbody>
                        <tr>
                            <td><Label>Nome*</Label></td>
                            <td><Input type="text" name="lastname" data-label="" value={lastname} onChange={(e) => setLastname(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><Label>Empresa</Label></td>
                            <td><Input type="text" name="company" data-label="" value={company} onChange={(e) => setCompany(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><Label>Telefone</Label></td>
                            <td><Input type="text" name="phone" data-label="" value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><Label>E-mail*</Label></td>
                            <td><Input type="email" name="email" data-label="" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><Label>Descrição*</Label></td>
                            <td><Textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td><select name="leadsource" data-label="leadsource" style={{ display: 'none' }}>
                                <option value="">Selecionar Valor</option>
                                <option value="Cold Call">Cold Call</option>/
                            </select></td>
                        </tr>
                        <tr>
                          <td><Label>Enviar Arquivo</Label></td>
                          <td><Input type="file" name="file_1_1" onChange={handleFileChange} /></td>
                        </tr>
                    </tbody>
                </table>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </form>
        </FormContainer>
    );
};