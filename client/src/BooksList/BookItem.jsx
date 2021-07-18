import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link } from "react-router-dom"
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../api";
import Loader from "react-loader-spinner"
import { Table } from 'antd';
import React from "react";




export const BookItem = ({id, title, author }) => {
    const queryClient = useQueryClient()
    const { mutateAsync, isLoading } = useMutation(removeBook)

    const remove = async () => {
        await mutateAsync(id)
        queryClient.invalidateQueries('books')
    }
    const columns = [
        {
            key: "titleKey",
            title: 'Title',
            dataIndex: 'title',
            render: (data) => <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">{data}</Link>
        },
        {
            key: "authorKey",
            title: 'Author',
            dataIndex: 'author',
        },
        {
            key: "actionKey",
            title: 'Action',
            render: () => <Button backgroundColor="#cc1c28" fontSize="12px" onClick={remove}>{ isLoading ? <Loader type="ThreeDots" color="#fff" height={10} /> : "Remove" }</Button>
        }
    ];
    const data = [
        {
            key: id,
            title: title,
            author: author
        }
    ];
    return (

        <Table columns={columns} dataSource={data} size="big"  pagination={false} rowKey={id}/>

        // <Flex key={id} p={3} m={4} width="70%" alignItems="center">
        //     <Link component={StyledLink} to={`/update-book/${id}`} mr="auto">{title}</Link>
        //     <Text>{author}</Text>
        //     <Button backgroundColor="#cc1c28" onClick={remove} ml="5">
        //         { isLoading ? <Loader type="ThreeDots" color="#fff" height={10} /> : "Remove" }
        //     </Button>
        // </Flex>

    );
};