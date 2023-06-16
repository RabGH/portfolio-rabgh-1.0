import React, { useState, useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Snackbar, CircularProgress, FormControl, Button } from "@mui/material";
import Head from "next/head";

const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

function ContactMe() {
    const [formData, setFormData] = useState(initialFormData);

    const [loading, setLoading] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
            console.log("Email send successfully");
            setSnackMessage("Email Sent successfully");
            setSnackOpen(true);
        } catch (error) {
            console.error("Error sending email", error);
            setSnackMessage("Error sending email");
            setSnackOpen(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSnackClose = (
        event: Event | React.SyntheticEvent<any, Event>,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackOpen(false);
    };

    return (
        <>
            <Head>
                <title>Rabii Ghais Portfolio Contact Page</title>
                <meta name="description" content="Rabii Ghais Contact Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="relative mx-auto flex h-screen 
                max-w-7xl flex-col items-center justify-evenly px-10 
                text-center md:flex-row md:text-left"
            >
                <h3 className="toptitle">Contact</h3>

                <div className="flex flex-col space-y-7 md:mt-0 xs:space-y-10">
                    <h4 className="text-center text-2xl font-semibold md:text-3xl">
                        Let me know what you{" "}
                        <span className="underline decoration-[#F7AB0A]/50">
                            need.
                        </span>
                    </h4>

                    <div className="space-y-5">
                        <div className="flex items-center justify-center space-x-3">
                            <EnvelopeIcon className="h-6 w-6 animate-pulse text-[#F7AB0A] md:h-8 md:w-8" />
                            <p className="text-1xl md:text-2xl">
                                rabiighais@gmail.com
                            </p>
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                            <PhoneIcon className="h-6 w-6 animate-pulse text-[#F7AB0A] md:h-8 md:w-8" />
                            <p className="text-1xl md:text-2xl">
                                +961 71 557 750
                            </p>
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                            <MapPinIcon className="h-6 w-6 animate-pulse text-[#F7AB0A] md:h-8 md:w-8" />
                            <p className="text-1xl md:text-2xl">
                                Lebanon, Beirut
                            </p>
                        </div>
                    </div>
                    <form
                        id="ContactForm"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mx-auto flex flex-col space-y-2"
                    >
                        <FormControl variant="outlined">
                            <div className="flex space-x-1">
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="contactInput"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="contactInput"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <input
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                className="contactInput"
                                type="text"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                className="contactInput"
                                required
                                value={formData.message}
                                onChange={handleAreaChange}
                            />
                        </FormControl>
                        <div className="mb-5 mt-5 flex flex-row items-center justify-evenly">
                            <Button
                                variant="contained"
                                type="submit"
                                size="large"
                                className="contactButtonStyles"
                                sx={{
                                    color: "black",
                                    backgroundColor: "#F7AB0A",
                                    "&:hover": {
                                        backgroundColor: "#F7F7F7",
                                    },
                                }}
                            >
                                {loading ? (
                                    <CircularProgress size={24} />
                                ) : (
                                    "Send"
                                )}
                            </Button>
                            <Button
                                variant="outlined"
                                type="reset"
                                size="large"
                                // className="contactButtonStyles"
                                onClick={() => {
                                    formRef.current?.reset();
                                    setFormData(initialFormData);
                                }}
                                sx={{
                                    color: "white",
                                    borderColor: "#F7AB0A",
                                    "&:hover": {
                                        borderColor: "#f5f5f5",
                                    },
                                }}
                            >
                                Clear
                            </Button>
                        </div>
                    </form>
                </div>
                <Snackbar
                    open={snackOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackClose}
                    message={snackMessage}
                />
            </div>
        </>
    );
}

export default ContactMe;
