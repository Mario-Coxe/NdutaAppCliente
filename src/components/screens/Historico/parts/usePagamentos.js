import { useEffect, useState } from 'react';
import { useGetUserDataQuery } from '../../../../features/user/services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { userApi } from '../../../../features/user/services/userService';
import { servicosApi } from '../../../../features/servico/services/servicoService';
import { motoristaApi } from '../../../../features/motorista/services/motoristaService';
import { SafeAreaView, Text, View } from 'react-native';
import Separador from '../../../common/myCommon/separador';
import styles from '../styles/PagamentosEstilos';

const usePagamentos = () => {
    const token = useSelector((state) => state.auth.token);
    const { data: user, error, isLoading } = useGetUserDataQuery(null, {
        skip: !token,
    });
    const [getMotoristaById] = motoristaApi.useGetMotoristaIdMutation();
    const [getSolicitacoesById] = servicosApi.useGetSolicitacoesByIdMutation();

    const idUser = user?.user?.id || ''; // ID do usuário
    const NameUser = user?.user?.name || '';

    const [getPagamentosById] = userApi.useGetPagamentosByIdMutation();
    const [updatedData, setUpdatedData] = useState([]);

    const fetchPagamentos = async (idUser) => {
        try {
            const result = await getPagamentosById(idUser).unwrap();
            console.log('resultado---------------->>>>>', result);

            const pagamentosPagos = result.filter((item) => item.status === 'pago');
            console.log('pagamentos pagos:', pagamentosPagos);

            const updatedData = [];

            for (const pagamento of pagamentosPagos) {
                const solicitacao = await getSolicitacoesById(pagamento.solicitacao_id).unwrap();
                const motorista = await getMotoristaById(solicitacao.motorista_id).unwrap();

                updatedData.push({
                    id: pagamento.id,
                    Nome: motorista.motorista.name, // Acessar corretamente a propriedade "name"
                    MetodoPagamento: pagamento.metodo_pagamento,
                    tempo: pagamento.data_hora.split(' ')[1], // Seleciona apenas a hora
                    valor: pagamento.valor + ' kz',
                });
            }

            console.log('Dados atualizados:', updatedData);
            setUpdatedData(updatedData);
        } catch (error) {
            console.error('falhou', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchPagamentos(idUser);
        }
    }, [token]);

    return { updatedData: updatedData || [] }; // Retorna um objeto com a propriedade updatedData definida como um array vazio se updatedData for nulo
};

export default usePagamentos;
