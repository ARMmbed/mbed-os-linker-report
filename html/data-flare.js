var mbed_map = {
    "name": "mbed", 
    "children": [
        {
            "name": ".text", 
            "children": [
                {
                    "name": "mbed-os", 
                    "children": [
                        {
                            "name": "features", 
                            "children": [
                                {
                                    "name": "FEATURE_UVISOR", 
                                    "children": [
                                        {
                                            "name": "importer", 
                                            "children": [
                                                {
                                                    "name": "TARGET_IGNORE", 
                                                    "children": [
                                                        {
                                                            "name": "uvisor", 
                                                            "children": [
                                                                {
                                                                    "name": "core", 
                                                                    "children": [
                                                                        {
                                                                            "name": "system", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "system.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "BusFault_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "DebugMonitor_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "HardFault_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "MemoryManagement_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "NonMaskableInt_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "SecureFault_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "UsageFault_IRQn_Handler", 
                                                                                                    "size": 12
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "isr_default_handler", 
                                                                                                    "size": 6
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "isr_default_sys_handler", 
                                                                                                    "size": 12
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "core_armv7m", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "priv_sys_hooks.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "PendSV_IRQn_Handler", 
                                                                                                            "size": 12
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "SysTick_IRQn_Handler", 
                                                                                                            "size": 12
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "priv_sys_hooks_load", 
                                                                                                            "size": 224
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "svc.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "SVCall_IRQn_Handler", 
                                                                                                            "size": 324
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "__svc_not_implemented", 
                                                                                                            "size": 8
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_svc_vtor_tbl", 
                                                                                                            "size": 84
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "svc_init", 
                                                                                                            "size": 2
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "box_init_v7m.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "box_init_context_switch_next", 
                                                                                                            "size": 300
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "box_init_first", 
                                                                                                            "size": 20
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "box_init_next", 
                                                                                                            "size": 52
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "box_init_pre", 
                                                                                                            "size": 24
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "box_init_thunk", 
                                                                                                            "size": 2
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "boxes_init", 
                                                                                                            "size": 4
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "virq.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "virq_acl_add", 
                                                                                                            "size": 56
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_default_check", 
                                                                                                            "size": 52
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_gateway_context_switch_in", 
                                                                                                            "size": 116
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_gateway_context_switch_out", 
                                                                                                            "size": 52
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_gateway_in", 
                                                                                                            "size": 56
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_gateway_out", 
                                                                                                            "size": 32
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_init", 
                                                                                                            "size": 204
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_disable", 
                                                                                                            "size": 18
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_disable_all", 
                                                                                                            "size": 128
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_enable", 
                                                                                                            "size": 76
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_enable_all", 
                                                                                                            "size": 96
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_level_get", 
                                                                                                            "size": 84
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_pending_clr", 
                                                                                                            "size": 40
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_pending_get", 
                                                                                                            "size": 44
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_pending_set", 
                                                                                                            "size": 40
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_priority_get", 
                                                                                                            "size": 60
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_irq_priority_set", 
                                                                                                            "size": 80
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_isr_get", 
                                                                                                            "size": 20
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "virq_isr_set", 
                                                                                                            "size": 24
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "api.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "__uvisor_api", 
                                                                                                    "size": 188
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "box_id_for_namespace_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "box_namespace_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "error_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "get_api_version", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_clear_pending_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_disable_all_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_disable_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_enable_all_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_enable_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_get_level_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_get_pending_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_get_priority_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_get_vector_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_set_pending_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_set_priority_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_set_vector_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "irq_system_reset_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_free_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_malloc_transition", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "pre_start_transition", 
                                                                                                    "size": 6
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "start_transition", 
                                                                                                    "size": 6
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "thread_create_transition", 
                                                                                                    "size": 6
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "thread_destroy_transition", 
                                                                                                    "size": 6
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "thread_switch_transition", 
                                                                                                    "size": 6
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_mem_invalidate_transition", 
                                                                                                    "size": 4
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "box_init.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "box_init", 
                                                                                                    "size": 96
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "rpc.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "callee_box_id.isra.0", 
                                                                                                    "size": 44
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "drain_message_queue", 
                                                                                                    "size": 492
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "drain_result_queue", 
                                                                                                    "size": 196
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "is_valid_queue", 
                                                                                                    "size": 112
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "context.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "context_discard_exc_sf", 
                                                                                                    "size": 24
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "context_forge_exc_sf", 
                                                                                                    "size": 72
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "context_forge_initial_frame", 
                                                                                                    "size": 30
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "context_switch_in", 
                                                                                                    "size": 264
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "context_switch_out", 
                                                                                                    "size": 144
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "context_validate_exc_sf", 
                                                                                                    "size": 26
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "pool_queue.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "dequeue", 
                                                                                                    "size": 86
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "enqueue", 
                                                                                                    "size": 64
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "find_first", 
                                                                                                    "size": 54
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_allocate", 
                                                                                                    "size": 52
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_free", 
                                                                                                    "size": 72
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_init", 
                                                                                                    "size": 76
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_dequeue", 
                                                                                                    "size": 46
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_dequeue_first", 
                                                                                                    "size": 34
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_enqueue", 
                                                                                                    "size": 40
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_find_first", 
                                                                                                    "size": 40
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_init", 
                                                                                                    "size": 40
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_try_dequeue", 
                                                                                                    "size": 50
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_try_dequeue_first", 
                                                                                                    "size": 40
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_try_enqueue", 
                                                                                                    "size": 48
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_queue_try_find_first", 
                                                                                                    "size": 46
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_try_allocate", 
                                                                                                    "size": 58
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_pool_try_free", 
                                                                                                    "size": 76
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "halt.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "halt_user_error", 
                                                                                                    "size": 16
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "ipc.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "ipc_box_init", 
                                                                                                    "size": 100
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "ipc_drain_queue", 
                                                                                                    "size": 528
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "ipc_io_is_ok", 
                                                                                                    "size": 58
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "pool_queue_is_ok", 
                                                                                                    "size": 62
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "recv_match", 
                                                                                                    "size": 58
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "main.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "main_entry", 
                                                                                                    "size": 58
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "main_init", 
                                                                                                    "size": 44
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_config_is_sane_and_enabled", 
                                                                                                    "size": 44
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_init_post", 
                                                                                                    "size": 36
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_init_pre", 
                                                                                                    "size": 76
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_start", 
                                                                                                    "size": 2
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "page_allocator_faults.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "page_allocator_check_range_for_box", 
                                                                                                    "size": 72
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_get_active_region_for_address", 
                                                                                                    "size": 96
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_iterate_active_pages", 
                                                                                                    "size": 128
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_register_fault", 
                                                                                                    "size": 32
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_reset_faults", 
                                                                                                    "size": 28
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "page_allocator.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "page_allocator_free", 
                                                                                                    "size": 248
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_get_page_from_address", 
                                                                                                    "size": 48
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_init", 
                                                                                                    "size": 308
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_malloc", 
                                                                                                    "size": 252
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "register_gateway.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "register_gateway_perform_operation", 
                                                                                                    "size": 300
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "semaphore.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "semaphore_post", 
                                                                                                    "size": 16
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "thread.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "thread_create", 
                                                                                                    "size": 64
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "thread_destroy", 
                                                                                                    "size": 52
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "thread_switch", 
                                                                                                    "size": 108
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "spinlock.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "uvisor_spin_lock", 
                                                                                                    "size": 16
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "uvisor_spin_trylock", 
                                                                                                    "size": 36
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }, 
                                                                                {
                                                                                    "name": "inc", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "page_allocator_config.h", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "page_allocator_map_clear", 
                                                                                                    "size": 40
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_map_get", 
                                                                                                    "size": 32
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "page_allocator_map_set", 
                                                                                                    "size": 36
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }, 
                                                                        {
                                                                            "name": "cmsis", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "inc", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "core_cm4.h", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "__NVIC_DisableIRQ", 
                                                                                                    "size": 40
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "__NVIC_SetPriority.part.0", 
                                                                                                    "size": 32
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }, 
                                                                        {
                                                                            "name": "debug", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "debug_box.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "debug_box_enter_from_priv", 
                                                                                                    "size": 24
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "debug_halt_error", 
                                                                                                    "size": 100
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "debug_reboot", 
                                                                                                    "size": 72
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "debug.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "debug_collect_halt_info", 
                                                                                                    "size": 132
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "debug_semihosting_enable", 
                                                                                                    "size": 16
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "core_armv7m", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "debug_box_armv7m.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "debug_deprivilege_and_die", 
                                                                                                            "size": 144
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "debug_die", 
                                                                                                            "size": 6
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }, 
                                                                        {
                                                                            "name": "vmpu", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "mpu_kinetis", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "vmpu_kinetis.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "vmpu_acl_sram", 
                                                                                                            "size": 128
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_arch_init", 
                                                                                                            "size": 18
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_fault_find_acl", 
                                                                                                            "size": 88
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_order_boxes", 
                                                                                                            "size": 16
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_switch", 
                                                                                                            "size": 22
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_sys_mux_handler", 
                                                                                                            "size": 320
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_kinetis_aips.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "vmpu_aips_add", 
                                                                                                            "size": 264
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_aips_switch", 
                                                                                                            "size": 144
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_fault_find_acl_aips", 
                                                                                                            "size": 80
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_kinetis_mpu.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "vmpu_buffer_access_is_ok", 
                                                                                                            "size": 152
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_is_region_size_valid", 
                                                                                                            "size": 32
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mpu_init", 
                                                                                                            "size": 16
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mpu_invalidate", 
                                                                                                            "size": 44
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mpu_lock", 
                                                                                                            "size": 28
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mpu_push", 
                                                                                                            "size": 136
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mpu_set_static_acl", 
                                                                                                            "size": 72
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_region_add_static_acl", 
                                                                                                            "size": 360
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_region_find_for_address", 
                                                                                                            "size": 48
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_region_get_for_box", 
                                                                                                            "size": 60
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_region_translate_acl", 
                                                                                                            "size": 106
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_round_up_region", 
                                                                                                            "size": 28
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_kinetis_mem.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "vmpu_mem_init", 
                                                                                                            "size": 56
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mem_push_page_acl", 
                                                                                                            "size": 36
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mem_push_page_acl_iterator", 
                                                                                                            "size": 38
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "vmpu_mem_switch", 
                                                                                                            "size": 68
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "vmpu.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "vmpu_box_id_from_namespace", 
                                                                                                    "size": 84
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_box_namespace_from_id", 
                                                                                                    "size": 112
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_fault_recovery_bus", 
                                                                                                    "size": 240
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_init_post", 
                                                                                                    "size": 848
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_init_pre", 
                                                                                                    "size": 192
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_xpriv_memcmp", 
                                                                                                    "size": 58
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "api", 
                                                                    "children": [
                                                                        {
                                                                            "name": "src", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "lib_hooks.c", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "__uvisor_lib_hooks", 
                                                                                            "size": 12
                                                                                        }
                                                                                    ]
                                                                                }, 
                                                                                {
                                                                                    "name": "uvisor-lib.c", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "uvisor_init", 
                                                                                            "size": 80
                                                                                        }, 
                                                                                        {
                                                                                            "name": "uvisor_lib_init", 
                                                                                            "size": 20
                                                                                        }
                                                                                    ]
                                                                                }, 
                                                                                {
                                                                                    "name": "pool_queue.c", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "uvisor_pool_queue_init", 
                                                                                            "size": 16
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        {
                                            "name": "source", 
                                            "children": [
                                                {
                                                    "name": "rtx", 
                                                    "children": [
                                                        {
                                                            "name": "box_init.c", 
                                                            "children": [
                                                                {
                                                                    "name": "__uvisor_initialize_rpc_queues", 
                                                                    "size": 212
                                                                }, 
                                                                {
                                                                    "name": "__uvisor_lib_box_init", 
                                                                    "size": 100
                                                                }, 
                                                                {
                                                                    "name": "__uvisor_priv_sys_hooks", 
                                                                    "size": 20
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "uvisor_semaphore.c", 
                                                            "children": [
                                                                {
                                                                    "name": "__uvisor_semaphore_init", 
                                                                    "size": 76
                                                                }, 
                                                                {
                                                                    "name": "__uvisor_semaphore_pend", 
                                                                    "size": 38
                                                                }, 
                                                                {
                                                                    "name": "__uvisor_semaphore_post", 
                                                                    "size": 6
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "rtx_malloc_wrapper.c", 
                                                            "children": [
                                                                {
                                                                    "name": "__wrap__calloc_r", 
                                                                    "size": 20
                                                                }, 
                                                                {
                                                                    "name": "__wrap__free_r", 
                                                                    "size": 22
                                                                }, 
                                                                {
                                                                    "name": "__wrap__malloc_r", 
                                                                    "size": 22
                                                                }, 
                                                                {
                                                                    "name": "__wrap__realloc_r", 
                                                                    "size": 20
                                                                }, 
                                                                {
                                                                    "name": "memory", 
                                                                    "size": 276
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "secure_allocator.c", 
                                                            "children": [
                                                                {
                                                                    "name": "secure_aligned_alloc", 
                                                                    "size": 46
                                                                }, 
                                                                {
                                                                    "name": "secure_allocator_create_with_pool", 
                                                                    "size": 44
                                                                }, 
                                                                {
                                                                    "name": "secure_calloc", 
                                                                    "size": 44
                                                                }, 
                                                                {
                                                                    "name": "secure_free", 
                                                                    "size": 36
                                                                }, 
                                                                {
                                                                    "name": "secure_malloc", 
                                                                    "size": 36
                                                                }, 
                                                                {
                                                                    "name": "secure_realloc", 
                                                                    "size": 52
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, 
                                {
                                    "name": "storage", 
                                    "children": [
                                        {
                                            "name": "FEATURE_STORAGE", 
                                            "children": [
                                                {
                                                    "name": "storage-volume-manager", 
                                                    "children": [
                                                        {
                                                            "name": "storage-volume-manager", 
                                                            "children": [
                                                                {
                                                                    "name": "storage_volume_manager.h", 
                                                                    "children": [
                                                                        {
                                                                            "name": "StorageVolumeManager::~StorageVolumeManager()", 
                                                                            "size": 2
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "targets", 
                            "children": [
                                {
                                    "name": "TARGET_Freescale", 
                                    "children": [
                                        {
                                            "name": "TARGET_MCUXpresso_MCUS", 
                                            "children": [
                                                {
                                                    "name": "TARGET_MCU_K64F", 
                                                    "children": [
                                                        {
                                                            "name": "device", 
                                                            "children": [
                                                                {
                                                                    "name": "TOOLCHAIN_GCC_ARM", 
                                                                    "children": [
                                                                        {
                                                                            "name": "startup_MK64F12.S", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "ADC0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "ADC1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "BusFault_Handler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CAN0_Bus_Off_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CAN0_Error_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CAN0_ORed_Message_buffer_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CAN0_Rx_Warning_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CAN0_Tx_Warning_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CAN0_Wake_Up_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CMP0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CMP1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CMP2_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "CMT_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DAC0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DAC1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA10_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA11_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA12_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA13_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA14_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA15_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA2_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA3_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA4_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA5_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA6_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA7_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA8_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA9_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA_Error_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DMA_Error_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DebugMon_Handler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "DefaultISR", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "ENET_1588_Timer_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "ENET_1588_Timer_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "ENET_Error_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "ENET_Receive_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "ENET_Transmit_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "FTFE_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "FTM0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "FTM1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "FTM2_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "FTM3_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "HardFault_Handler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "I2C0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "I2C1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "I2C2_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "I2S0_Rx_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "I2S0_Tx_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "LLWU_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "LPTMR0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "LVD_LVW_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "MCG_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "MCM_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "MemManage_Handler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PDB0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PIT0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PIT1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PIT2_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PIT3_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PORTA_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PORTB_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PORTC_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PORTD_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "PORTE_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "RNG_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "RTC_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "RTC_Seconds_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "Read_Collision_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "Reserved71_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "Reset_Handler", 
                                                                                    "size": 76
                                                                                }, 
                                                                                {
                                                                                    "name": "SDHC_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "SPI0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "SPI1_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "SPI2_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "SWI_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART0_ERR_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART0_ERR_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART0_LON_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART0_LON_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART0_RX_TX_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART1_ERR_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART1_ERR_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART1_RX_TX_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART2_ERR_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART2_ERR_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART2_RX_TX_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART3_ERR_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART3_ERR_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART3_RX_TX_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART4_ERR_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART4_ERR_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART4_RX_TX_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART5_ERR_DriverIRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART5_ERR_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UART5_RX_TX_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "USB0_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "USBDCD_IRQHandler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "UsageFault_Handler", 
                                                                                    "size": 4
                                                                                }, 
                                                                                {
                                                                                    "name": "WDOG_EWM_IRQHandler", 
                                                                                    "size": 4
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "system_MK64F12.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "SystemInit", 
                                                                            "size": 28
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "TARGET_FRDM", 
                                                            "children": [
                                                                {
                                                                    "name": "fsl_clock_config.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "BOARD_BootClockRUN", 
                                                                            "size": 80
                                                                        }, 
                                                                        {
                                                                            "name": "g_defaultClockConfigRun", 
                                                                            "size": 32
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "mbed_overrides.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "NMI_Handler", 
                                                                            "size": 18
                                                                        }, 
                                                                        {
                                                                            "name": "mbed_sdk_init", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "drivers", 
                                                            "children": [
                                                                {
                                                                    "name": "fsl_flexcan.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "CAN0_DriverIRQHandler", 
                                                                            "size": 60
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_clock.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "CLOCK_BootToPeeMode", 
                                                                            "size": 100
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_EnablePll0", 
                                                                            "size": 152
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetFixedFreqClkFreq", 
                                                                            "size": 52
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetFllExtRefClkFreq", 
                                                                            "size": 112
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetFreq", 
                                                                            "size": 204
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetInternalRefClkFreq", 
                                                                            "size": 52
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetInternalRefClkSelectFreq.part.0", 
                                                                            "size": 36
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetOutClkFreq", 
                                                                            "size": 56
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_GetPllFllSelClkFreq", 
                                                                            "size": 56
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_InitOsc0", 
                                                                            "size": 132
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_SetExternalRefClkConfig", 
                                                                            "size": 124
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_SetInternalRefClkConfig", 
                                                                            "size": 264
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_SetPbeMode", 
                                                                            "size": 220
                                                                        }, 
                                                                        {
                                                                            "name": "CLOCK_SetSimConfig", 
                                                                            "size": 124
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_clock.h", 
                                                                    "children": [
                                                                        {
                                                                            "name": "CLOCK_SetSimSafeDivs", 
                                                                            "size": 24
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_edma.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "DMA0_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA10_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA11_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA12_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA13_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA14_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA15_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA1_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA2_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA3_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA4_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA5_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA6_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA7_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA8_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "DMA9_DriverIRQHandler", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "EDMA_HandleIRQ", 
                                                                            "size": 176
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_enet.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "ENET_Error_IRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "ENET_Receive_IRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "ENET_Transmit_IRQHandler", 
                                                                            "size": 24
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_i2c.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "I2C0_DriverIRQHandler", 
                                                                            "size": 20
                                                                        }, 
                                                                        {
                                                                            "name": "I2C1_DriverIRQHandler", 
                                                                            "size": 20
                                                                        }, 
                                                                        {
                                                                            "name": "I2C2_DriverIRQHandler", 
                                                                            "size": 20
                                                                        }, 
                                                                        {
                                                                            "name": "I2C_TransferCommonIRQHandler", 
                                                                            "size": 52
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_sai.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "I2S0_Rx_DriverIRQHandler", 
                                                                            "size": 60
                                                                        }, 
                                                                        {
                                                                            "name": "I2S0_Tx_DriverIRQHandler", 
                                                                            "size": 60
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_pit.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "PIT_Init", 
                                                                            "size": 104
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_sdhc.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "SDHC_DriverIRQHandler", 
                                                                            "size": 60
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_dspi.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "SPI0_DriverIRQHandler", 
                                                                            "size": 52
                                                                        }, 
                                                                        {
                                                                            "name": "SPI1_DriverIRQHandler", 
                                                                            "size": 52
                                                                        }, 
                                                                        {
                                                                            "name": "SPI2_DriverIRQHandler", 
                                                                            "size": 52
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_uart.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "UART0_DriverIRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "UART0_RX_TX_DriverIRQHandler", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "UART1_DriverIRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "UART1_RX_TX_DriverIRQHandler", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "UART2_DriverIRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "UART2_RX_TX_DriverIRQHandler", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "UART3_DriverIRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "UART3_RX_TX_DriverIRQHandler", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "UART4_DriverIRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "UART4_RX_TX_DriverIRQHandler", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "UART5_DriverIRQHandler", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "UART5_RX_TX_DriverIRQHandler", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "UART_ClearStatusFlags", 
                                                                            "size": 64
                                                                        }, 
                                                                        {
                                                                            "name": "UART_GetDefaultConfig", 
                                                                            "size": 56
                                                                        }, 
                                                                        {
                                                                            "name": "UART_GetStatusFlags", 
                                                                            "size": 22
                                                                        }, 
                                                                        {
                                                                            "name": "UART_Init", 
                                                                            "size": 396
                                                                        }, 
                                                                        {
                                                                            "name": "UART_SetBaudRate", 
                                                                            "size": 140
                                                                        }, 
                                                                        {
                                                                            "name": "s_uartBases", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "s_uartClock", 
                                                                            "size": 24
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "serial_api.c", 
                                                            "children": [
                                                                {
                                                                    "name": "serial_baud", 
                                                                    "size": 44
                                                                }, 
                                                                {
                                                                    "name": "serial_getc", 
                                                                    "size": 32
                                                                }, 
                                                                {
                                                                    "name": "serial_init", 
                                                                    "size": 252
                                                                }, 
                                                                {
                                                                    "name": "serial_putc", 
                                                                    "size": 36
                                                                }, 
                                                                {
                                                                    "name": "serial_readable", 
                                                                    "size": 44
                                                                }, 
                                                                {
                                                                    "name": "serial_writable", 
                                                                    "size": 44
                                                                }, 
                                                                {
                                                                    "name": "uart_addrs", 
                                                                    "size": 24
                                                                }, 
                                                                {
                                                                    "name": "uart_clocks", 
                                                                    "size": 6
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "us_ticker.c", 
                                                            "children": [
                                                                {
                                                                    "name": "us_ticker_clear_interrupt", 
                                                                    "size": 16
                                                                }, 
                                                                {
                                                                    "name": "us_ticker_disable_interrupt", 
                                                                    "size": 20
                                                                }, 
                                                                {
                                                                    "name": "us_ticker_fire_interrupt", 
                                                                    "size": 12
                                                                }, 
                                                                {
                                                                    "name": "us_ticker_read", 
                                                                    "size": 32
                                                                }, 
                                                                {
                                                                    "name": "us_ticker_set_interrupt", 
                                                                    "size": 84
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "api", 
                                                    "children": [
                                                        {
                                                            "name": "gpio_api.c", 
                                                            "children": [
                                                                {
                                                                    "name": "gpio_addrs", 
                                                                    "size": 20
                                                                }, 
                                                                {
                                                                    "name": "gpio_dir", 
                                                                    "size": 76
                                                                }, 
                                                                {
                                                                    "name": "gpio_init", 
                                                                    "size": 18
                                                                }, 
                                                                {
                                                                    "name": "gpio_mode", 
                                                                    "size": 6
                                                                }, 
                                                                {
                                                                    "name": "gpio_read", 
                                                                    "size": 56
                                                                }, 
                                                                {
                                                                    "name": "gpio_write", 
                                                                    "size": 68
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "gpio_irq_api.c", 
                                                            "children": [
                                                                {
                                                                    "name": "gpio_irqA", 
                                                                    "size": 8
                                                                }, 
                                                                {
                                                                    "name": "gpio_irqB", 
                                                                    "size": 8
                                                                }, 
                                                                {
                                                                    "name": "gpio_irqC", 
                                                                    "size": 8
                                                                }, 
                                                                {
                                                                    "name": "gpio_irqD", 
                                                                    "size": 8
                                                                }, 
                                                                {
                                                                    "name": "gpio_irqE", 
                                                                    "size": 8
                                                                }, 
                                                                {
                                                                    "name": "gpio_irq_free", 
                                                                    "size": 16
                                                                }, 
                                                                {
                                                                    "name": "gpio_irq_init", 
                                                                    "size": 172
                                                                }, 
                                                                {
                                                                    "name": "gpio_irq_set", 
                                                                    "size": 144
                                                                }, 
                                                                {
                                                                    "name": "handle_interrupt_in", 
                                                                    "size": 164
                                                                }, 
                                                                {
                                                                    "name": "port_addrs", 
                                                                    "size": 20
                                                                }, 
                                                                {
                                                                    "name": "port_irqs", 
                                                                    "size": 5
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "pinmap.c", 
                                                            "children": [
                                                                {
                                                                    "name": "pin_function", 
                                                                    "size": 140
                                                                }, 
                                                                {
                                                                    "name": "pin_mode", 
                                                                    "size": 96
                                                                }, 
                                                                {
                                                                    "name": "port_addrs", 
                                                                    "size": 20
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "rtos", 
                            "children": [
                                {
                                    "name": "TARGET_CORTEX", 
                                    "children": [
                                        {
                                            "name": "rtx5", 
                                            "children": [
                                                {
                                                    "name": "rtx_evr.c", 
                                                    "children": [
                                                        {
                                                            "name": "EvrRtxMemoryBlockFree", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "EvrRtxMessageQueueGet", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "EvrRtxMessageQueuePut", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "EvrRtxThreadNew", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "EvrRtxTimerCallback", 
                                                            "size": 2
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_msgqueue.c", 
                                                    "children": [
                                                        {
                                                            "name": "MessageQueueGet", 
                                                            "size": 68
                                                        }, 
                                                        {
                                                            "name": "MessageQueuePut", 
                                                            "size": 74
                                                        }, 
                                                        {
                                                            "name": "MessageQueueRemove", 
                                                            "size": 24
                                                        }, 
                                                        {
                                                            "name": "osMessageQueueGet", 
                                                            "size": 160
                                                        }, 
                                                        {
                                                            "name": "osMessageQueueNew", 
                                                            "size": 88
                                                        }, 
                                                        {
                                                            "name": "osMessageQueuePut", 
                                                            "size": 180
                                                        }, 
                                                        {
                                                            "name": "svcRtxMessageQueueGet", 
                                                            "size": 280
                                                        }, 
                                                        {
                                                            "name": "svcRtxMessageQueueNew", 
                                                            "size": 320
                                                        }, 
                                                        {
                                                            "name": "svcRtxMessageQueuePut", 
                                                            "size": 248
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "TARGET_RTOS_M4_M7", 
                                                    "children": [
                                                        {
                                                            "name": "TOOLCHAIN_GCC", 
                                                            "children": [
                                                                {
                                                                    "name": "irq_cm4f.S", 
                                                                    "children": [
                                                                        {
                                                                            "name": "PendSV_Handler", 
                                                                            "size": 16
                                                                        }, 
                                                                        {
                                                                            "name": "SysTick_Handler", 
                                                                            "size": 16
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_semaphore.c", 
                                                    "children": [
                                                        {
                                                            "name": "SemaphoreTokenDecrement", 
                                                            "size": 36
                                                        }, 
                                                        {
                                                            "name": "SemaphoreTokenIncrement", 
                                                            "size": 46
                                                        }, 
                                                        {
                                                            "name": "osSemaphoreAcquire", 
                                                            "size": 116
                                                        }, 
                                                        {
                                                            "name": "osSemaphoreNew", 
                                                            "size": 88
                                                        }, 
                                                        {
                                                            "name": "osSemaphoreRelease", 
                                                            "size": 116
                                                        }, 
                                                        {
                                                            "name": "svcRtxSemaphoreNew", 
                                                            "size": 160
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_timer.c", 
                                                    "children": [
                                                        {
                                                            "name": "TimerInsert", 
                                                            "size": 56
                                                        }, 
                                                        {
                                                            "name": "osRtxTimerThread", 
                                                            "size": 76
                                                        }, 
                                                        {
                                                            "name": "osRtxTimerTick", 
                                                            "size": 84
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "core_cm.h", 
                                                    "children": [
                                                        {
                                                            "name": "atomic_inc16_lim", 
                                                            "size": 26
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_delay.c", 
                                                    "children": [
                                                        {
                                                            "name": "osDelay", 
                                                            "size": 56
                                                        }, 
                                                        {
                                                            "name": "svcRtxDelay", 
                                                            "size": 16
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_kernel.c", 
                                                    "children": [
                                                        {
                                                            "name": "osKernelGetState", 
                                                            "size": 64
                                                        }, 
                                                        {
                                                            "name": "osKernelInitialize", 
                                                            "size": 76
                                                        }, 
                                                        {
                                                            "name": "osKernelStart", 
                                                            "size": 100
                                                        }, 
                                                        {
                                                            "name": "svcRtxKernelGetState", 
                                                            "size": 20
                                                        }, 
                                                        {
                                                            "name": "svcRtxKernelInitialize", 
                                                            "size": 384
                                                        }, 
                                                        {
                                                            "name": "svcRtxKernelLock", 
                                                            "size": 56
                                                        }, 
                                                        {
                                                            "name": "svcRtxKernelStart", 
                                                            "size": 188
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_mutex.c", 
                                                    "children": [
                                                        {
                                                            "name": "osMutexAcquire", 
                                                            "size": 60
                                                        }, 
                                                        {
                                                            "name": "osMutexNew", 
                                                            "size": 80
                                                        }, 
                                                        {
                                                            "name": "osMutexRelease", 
                                                            "size": 56
                                                        }, 
                                                        {
                                                            "name": "osRtxMutexOwnerRelease", 
                                                            "size": 80
                                                        }, 
                                                        {
                                                            "name": "svcRtxMutexAcquire", 
                                                            "size": 200
                                                        }, 
                                                        {
                                                            "name": "svcRtxMutexNew", 
                                                            "size": 136
                                                        }, 
                                                        {
                                                            "name": "svcRtxMutexRelease", 
                                                            "size": 212
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rt_OsEventObserver.c", 
                                                    "children": [
                                                        {
                                                            "name": "osRegisterForOsEvents", 
                                                            "size": 24
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_memory.c", 
                                                    "children": [
                                                        {
                                                            "name": "osRtxMemoryAlloc", 
                                                            "size": 104
                                                        }, 
                                                        {
                                                            "name": "osRtxMemoryFree", 
                                                            "size": 74
                                                        }, 
                                                        {
                                                            "name": "osRtxMemoryInit", 
                                                            "size": 64
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_mempool.c", 
                                                    "children": [
                                                        {
                                                            "name": "osRtxMemoryPoolFree", 
                                                            "size": 104
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_system.c", 
                                                    "children": [
                                                        {
                                                            "name": "osRtxPendSV_Handler", 
                                                            "size": 136
                                                        }, 
                                                        {
                                                            "name": "osRtxPostProcess", 
                                                            "size": 100
                                                        }, 
                                                        {
                                                            "name": "osRtxSysTimerAckIRQ", 
                                                            "size": 12
                                                        }, 
                                                        {
                                                            "name": "osRtxSysTimerEnable", 
                                                            "size": 12
                                                        }, 
                                                        {
                                                            "name": "osRtxSysTimerSetup", 
                                                            "size": 52
                                                        }, 
                                                        {
                                                            "name": "osRtxTick_Handler", 
                                                            "size": 124
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_thread.c", 
                                                    "children": [
                                                        {
                                                            "name": "osRtxThreadBlock", 
                                                            "size": 48
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadDelayTick", 
                                                            "size": 188
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadDispatch", 
                                                            "size": 92
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadListGet", 
                                                            "size": 20
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadListPut", 
                                                            "size": 38
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadListRemove", 
                                                            "size": 20
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadListRoot", 
                                                            "size": 14
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadListSort", 
                                                            "size": 36
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadReadyPut", 
                                                            "size": 16
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadStackCheck", 
                                                            "size": 40
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadSwitch", 
                                                            "size": 32
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadWaitEnter", 
                                                            "size": 72
                                                        }, 
                                                        {
                                                            "name": "osRtxThreadWaitExit", 
                                                            "size": 42
                                                        }, 
                                                        {
                                                            "name": "osThreadExit", 
                                                            "size": 28
                                                        }, 
                                                        {
                                                            "name": "osThreadGetId", 
                                                            "size": 44
                                                        }, 
                                                        {
                                                            "name": "osThreadGetName", 
                                                            "size": 48
                                                        }, 
                                                        {
                                                            "name": "osThreadNew", 
                                                            "size": 6
                                                        }, 
                                                        {
                                                            "name": "svcRtxThreadExit", 
                                                            "size": 120
                                                        }, 
                                                        {
                                                            "name": "svcRtxThreadGetId", 
                                                            "size": 20
                                                        }, 
                                                        {
                                                            "name": "svcRtxThreadNew", 
                                                            "size": 528
                                                        }, 
                                                        {
                                                            "name": "thread_switch_helper", 
                                                            "size": 28
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "rtx_lib.c", 
                                                    "children": [
                                                        {
                                                            "name": "os_idle_thread_attr", 
                                                            "size": 36
                                                        }, 
                                                        {
                                                            "name": "os_timer_mq_attr", 
                                                            "size": 24
                                                        }, 
                                                        {
                                                            "name": "os_timer_thread_attr", 
                                                            "size": 36
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        {
                                            "name": "mbed_rtx_handlers.c", 
                                            "children": [
                                                {
                                                    "name": "EvrRtxThreadExit", 
                                                    "size": 14
                                                }, 
                                                {
                                                    "name": "osRtxErrorNotify", 
                                                    "size": 128
                                                }, 
                                                {
                                                    "name": "osRtxIdleThread", 
                                                    "size": 8
                                                }
                                            ]
                                        }, 
                                        {
                                            "name": "mbed_rtx_idle.cpp", 
                                            "children": [
                                                {
                                                    "name": "default_idle_hook()", 
                                                    "size": 2
                                                }, 
                                                {
                                                    "name": "rtos_idle_loop", 
                                                    "size": 16
                                                }
                                            ]
                                        }, 
                                        {
                                            "name": "mbed_boot.c", 
                                            "children": [
                                                {
                                                    "name": "__wrap_main", 
                                                    "size": 14
                                                }, 
                                                {
                                                    "name": "mbed_set_stack_heap", 
                                                    "size": 64
                                                }, 
                                                {
                                                    "name": "mbed_start_main", 
                                                    "size": 80
                                                }, 
                                                {
                                                    "name": "pre_main", 
                                                    "size": 136
                                                }, 
                                                {
                                                    "name": "software_init_hook", 
                                                    "size": 32
                                                }
                                            ]
                                        }
                                    ]
                                }, 
                                {
                                    "name": "Thread.cpp", 
                                    "children": [
                                        {
                                            "name": "thread_terminate_hook", 
                                            "size": 16
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "platform", 
                            "children": [
                                {
                                    "name": "mbed_retarget.cpp", 
                                    "children": [
                                        {
                                            "name": "init_serial()", 
                                            "size": 48
                                        }, 
                                        {
                                            "name": "operator delete[](void*)", 
                                            "size": 8
                                        }, 
                                        {
                                            "name": "operator new(unsigned int)", 
                                            "size": 24
                                        }, 
                                        {
                                            "name": "__aeabi_atexit", 
                                            "size": 4
                                        }, 
                                        {
                                            "name": "__wrap_atexit", 
                                            "size": 4
                                        }, 
                                        {
                                            "name": "__wrap_exit", 
                                            "size": 6
                                        }, 
                                        {
                                            "name": "_close", 
                                            "size": 64
                                        }, 
                                        {
                                            "name": "_exit", 
                                            "size": 36
                                        }, 
                                        {
                                            "name": "_fstat", 
                                            "size": 30
                                        }, 
                                        {
                                            "name": "_isatty", 
                                            "size": 60
                                        }, 
                                        {
                                            "name": "_lseek", 
                                            "size": 68
                                        }, 
                                        {
                                            "name": "_read", 
                                            "size": 88
                                        }, 
                                        {
                                            "name": "_write", 
                                            "size": 100
                                        }
                                    ]
                                }, 
                                {
                                    "name": "Callback.h", 
                                    "children": [
                                        {
                                            "name": "mbed::Callback<void ()>::~Callback()", 
                                            "size": 16
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_critical.c", 
                                    "children": [
                                        {
                                            "name": "core_util_are_interrupts_enabled", 
                                            "size": 12
                                        }, 
                                        {
                                            "name": "core_util_critical_section_enter", 
                                            "size": 64
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_error.c", 
                                    "children": [
                                        {
                                            "name": "error", 
                                            "size": 44
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_assert.c", 
                                    "children": [
                                        {
                                            "name": "mbed_assert_internal", 
                                            "size": 36
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_board.c", 
                                    "children": [
                                        {
                                            "name": "mbed_die", 
                                            "size": 90
                                        }, 
                                        {
                                            "name": "mbed_error_printf", 
                                            "size": 26
                                        }, 
                                        {
                                            "name": "mbed_error_vfprintf", 
                                            "size": 88
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_wait_api_rtos.cpp", 
                                    "children": [
                                        {
                                            "name": "wait_ms", 
                                            "size": 10
                                        }, 
                                        {
                                            "name": "wait_us", 
                                            "size": 48
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "drivers", 
                            "children": [
                                {
                                    "name": "InterruptIn.cpp", 
                                    "children": [
                                        {
                                            "name": "mbed::InterruptIn::InterruptIn(PinName)", 
                                            "size": 112
                                        }, 
                                        {
                                            "name": "mbed::InterruptIn::~InterruptIn()", 
                                            "size": 40
                                        }, 
                                        {
                                            "name": "mbed::donothing()", 
                                            "size": 2
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "hal", 
                            "children": [
                                {
                                    "name": "mbed_gpio.c", 
                                    "children": [
                                        {
                                            "name": "gpio_init_in", 
                                            "size": 6
                                        }, 
                                        {
                                            "name": "gpio_init_out", 
                                            "size": 6
                                        }, 
                                        {
                                            "name": "gpio_init_out_ex", 
                                            "size": 46
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_pinmap_common.c", 
                                    "children": [
                                        {
                                            "name": "pinmap_find_peripheral", 
                                            "size": 22
                                        }, 
                                        {
                                            "name": "pinmap_merge", 
                                            "size": 36
                                        }, 
                                        {
                                            "name": "pinmap_peripheral", 
                                            "size": 32
                                        }, 
                                        {
                                            "name": "pinmap_pinout", 
                                            "size": 56
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_ticker_api.c", 
                                    "children": [
                                        {
                                            "name": "schedule_interrupt", 
                                            "size": 108
                                        }, 
                                        {
                                            "name": "ticker_irq_handler", 
                                            "size": 68
                                        }, 
                                        {
                                            "name": "update_present_time", 
                                            "size": 38
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_us_ticker_api.c", 
                                    "children": [
                                        {
                                            "name": "us_data", 
                                            "size": 8
                                        }, 
                                        {
                                            "name": "us_interface", 
                                            "size": 24
                                        }, 
                                        {
                                            "name": "us_ticker_irq_handler", 
                                            "size": 12
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, 
                {
                    "name": "libc", 
                    "children": [
                        {
                            "name": "CSWTCH.18", 
                            "size": 17
                        }, 
                        {
                            "name": "__popcountsi2", 
                            "size": 40
                        }, 
                        {
                            "name": "g_isr_vector", 
                            "size": 408
                        }, 
                        {
                            "name": "halt", 
                            "size": 4
                        }, 
                        {
                            "name": "memcpy", 
                            "size": 236
                        }, 
                        {
                            "name": "memmove", 
                            "size": 198
                        }, 
                        {
                            "name": "memset", 
                            "size": 154
                        }, 
                        {
                            "name": "strnlen", 
                            "size": 60
                        }, 
                        {
                            "name": "uvisor_spin_init", 
                            "size": 10
                        }, 
                        {
                            "name": "uvisor_spin_unlock", 
                            "size": 10
                        }, 
                        {
                            "name": "virq_isr_register", 
                            "size": 52
                        }, 
                        {
                            "name": "CLOCK_GetEr32kClkFreq", 
                            "size": 96
                        }, 
                        {
                            "name": "CLOCK_GetFllFreq", 
                            "size": 96
                        }, 
                        {
                            "name": "CLOCK_GetMcgExtClkFreq", 
                            "size": 104
                        }, 
                        {
                            "name": "CLOCK_GetOsc0ErClkFreq", 
                            "size": 56
                        }, 
                        {
                            "name": "CLOCK_GetPll0Freq", 
                            "size": 108
                        }, 
                        {
                            "name": "DSPI_CommonIRQHandler", 
                            "size": 24
                        }, 
                        {
                            "name": "EvrRtxEventFlagsWaitTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelError", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelGetState", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelInitialize", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelInitializeCompleted", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelLocked", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelStart", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxKernelStarted", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMemoryAlloc", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMemoryBlockAlloc", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMemoryBlockInit", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMemoryFree", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMemoryInit", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMemoryPoolAllocTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueCreated", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueError", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueGetPending", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueGetTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueInsertPending", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueInserted", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueNew", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueNotInserted", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueNotRetrieved", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueuePutPending", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueuePutTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMessageQueueRetrieved", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexAcquire", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexAcquirePending", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexAcquireTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexAcquired", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexCreated", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexError", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexNew", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexNotAcquired", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexRelease", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxMutexReleased", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreAcquire", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreAcquirePending", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreAcquireTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreAcquired", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreCreated", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreError", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreNew", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreNotAcquired", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreRelease", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxSemaphoreReleased", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadBlocked", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadCreated", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadDelay", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadDelayCompleted", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadDestroyed", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadError", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadFlagsWaitCompleted", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadFlagsWaitTimeout", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadGetId", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadGetName", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadJoined", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadSwitch", 
                            "size": 2
                        }, 
                        {
                            "name": "EvrRtxThreadUnblocked", 
                            "size": 2
                        }, 
                        {
                            "name": "PIT_GetInstance", 
                            "size": 40
                        }, 
                        {
                            "name": "PinMap_UART_RX", 
                            "size": 144
                        }, 
                        {
                            "name": "PinMap_UART_TX", 
                            "size": 144
                        }, 
                        {
                            "name": "ThreadFlagsCheck", 
                            "size": 106
                        }, 
                        {
                            "name": "UART_GetInstance", 
                            "size": 52
                        }, 
                        {
                            "name": "_Balloc", 
                            "size": 76
                        }, 
                        {
                            "name": "_Bfree", 
                            "size": 18
                        }, 
                        {
                            "name": "_GLOBAL__sub_I_volumeManager", 
                            "size": 40
                        }, 
                        {
                            "name": "g_main_acl", 
                            "size": 180
                        }, 
                        {
                            "name": "__uvisor_box_main", 
                            "size": 12
                        }, 
                        {
                            "name": "StorageVolumeManager::~StorageVolumeManager()", 
                            "size": 2
                        }, 
                        {
                            "name": "mbed::InterruptIn::_irq_handler(unsigned long, gpio_irq_event)", 
                            "size": 24
                        }, 
                        {
                            "name": "mbed::InterruptIn::fall(mbed::Callback<void ()>)", 
                            "size": 76
                        }, 
                        {
                            "name": "mbed::InterruptIn::mode(PinMode)", 
                            "size": 26
                        }, 
                        {
                            "name": "mbed::InterruptIn::InterruptIn(PinName)", 
                            "size": 112
                        }, 
                        {
                            "name": "mbed::InterruptIn::~InterruptIn()", 
                            "size": 18
                        }, 
                        {
                            "name": "void mbed::Callback<void ()>::function_call<void (*)()>(void const*)", 
                            "size": 4
                        }, 
                        {
                            "name": "void mbed::Callback<void ()>::function_dtor<void (*)()>(void*)", 
                            "size": 2
                        }, 
                        {
                            "name": "void mbed::Callback<void ()>::function_move<void (*)()>(void*, void const*)", 
                            "size": 8
                        }, 
                        {
                            "name": "mbed::Callback<void ()>::~Callback()", 
                            "size": 16
                        }, 
                        {
                            "name": "mbed::Callback<void ()>::operator=(mbed::Callback<void ()> const&)", 
                            "size": 36
                        }, 
                        {
                            "name": "rtos::Thread::wait(unsigned long)", 
                            "size": 4
                        }, 
                        {
                            "name": "mbed::Callback<void ()>::call() const", 
                            "size": 40
                        }, 
                        {
                            "name": "vtable for mbed::InterruptIn", 
                            "size": 16
                        }, 
                        {
                            "name": "void mbed::Callback<void ()>::generate<void (*)()>(void (* const&)())::ops", 
                            "size": 12
                        }, 
                        {
                            "name": "operator delete(void*)", 
                            "size": 4
                        }, 
                        {
                            "name": "__adddf3", 
                            "size": 630
                        }, 
                        {
                            "name": "__aeabi_cdcmpeq", 
                            "size": 16
                        }, 
                        {
                            "name": "__aeabi_cdcmple", 
                            "size": 16
                        }, 
                        {
                            "name": "__aeabi_cdrcmple", 
                            "size": 32
                        }, 
                        {
                            "name": "__aeabi_d2iz", 
                            "size": 78
                        }, 
                        {
                            "name": "__aeabi_dadd", 
                            "size": 630
                        }, 
                        {
                            "name": "__aeabi_dcmpeq", 
                            "size": 18
                        }, 
                        {
                            "name": "__aeabi_dcmpge", 
                            "size": 18
                        }, 
                        {
                            "name": "__aeabi_dcmpgt", 
                            "size": 18
                        }, 
                        {
                            "name": "__aeabi_dcmple", 
                            "size": 18
                        }, 
                        {
                            "name": "__aeabi_dcmplt", 
                            "size": 18
                        }, 
                        {
                            "name": "__aeabi_dcmpun", 
                            "size": 44
                        }, 
                        {
                            "name": "__aeabi_ddiv", 
                            "size": 464
                        }, 
                        {
                            "name": "__aeabi_dmul", 
                            "size": 596
                        }, 
                        {
                            "name": "__aeabi_dsub", 
                            "size": 634
                        }, 
                        {
                            "name": "__aeabi_f2d", 
                            "size": 58
                        }, 
                        {
                            "name": "__aeabi_i2d", 
                            "size": 34
                        }, 
                        {
                            "name": "__aeabi_idiv0", 
                            "size": 2
                        }, 
                        {
                            "name": "__aeabi_l2d", 
                            "size": 90
                        }, 
                        {
                            "name": "__aeabi_ldiv0", 
                            "size": 2
                        }, 
                        {
                            "name": "__aeabi_ui2d", 
                            "size": 30
                        }, 
                        {
                            "name": "__aeabi_ul2d", 
                            "size": 106
                        }, 
                        {
                            "name": "__ascii_mbtowc", 
                            "size": 42
                        }, 
                        {
                            "name": "__ascii_wctomb", 
                            "size": 26
                        }, 
                        {
                            "name": "__assert_func", 
                            "size": 60
                        }, 
                        {
                            "name": "__cmpdf2", 
                            "size": 122
                        }, 
                        {
                            "name": "__d2b", 
                            "size": 182
                        }, 
                        {
                            "name": "__divdf3", 
                            "size": 464
                        }, 
                        {
                            "name": "__eqdf2", 
                            "size": 122
                        }, 
                        {
                            "name": "__errno", 
                            "size": 12
                        }, 
                        {
                            "name": "__extendsfdf2", 
                            "size": 58
                        }, 
                        {
                            "name": "__fixdfsi", 
                            "size": 78
                        }, 
                        {
                            "name": "__floatdidf", 
                            "size": 90
                        }, 
                        {
                            "name": "__floatsidf", 
                            "size": 34
                        }, 
                        {
                            "name": "__floatundidf", 
                            "size": 106
                        }, 
                        {
                            "name": "__floatunsidf", 
                            "size": 30
                        }, 
                        {
                            "name": "__fputwc", 
                            "size": 158
                        }, 
                        {
                            "name": "__func__.7707", 
                            "size": 23
                        }, 
                        {
                            "name": "__func__.7752", 
                            "size": 23
                        }, 
                        {
                            "name": "__func__.7753", 
                            "size": 16
                        }, 
                        {
                            "name": "__func__.7758", 
                            "size": 9
                        }, 
                        {
                            "name": "__func__.7760", 
                            "size": 22
                        }, 
                        {
                            "name": "__func__.7850", 
                            "size": 18
                        }, 
                        {
                            "name": "__func__.7898", 
                            "size": 17
                        }, 
                        {
                            "name": "__func__.7903", 
                            "size": 17
                        }, 
                        {
                            "name": "__func__.7919", 
                            "size": 10
                        }, 
                        {
                            "name": "__func__.7937", 
                            "size": 22
                        }, 
                        {
                            "name": "__func__.7943", 
                            "size": 17
                        }, 
                        {
                            "name": "__func__.8034", 
                            "size": 17
                        }, 
                        {
                            "name": "__func__.8098", 
                            "size": 20
                        }, 
                        {
                            "name": "__func__.8182", 
                            "size": 15
                        }, 
                        {
                            "name": "__func__.8231", 
                            "size": 25
                        }, 
                        {
                            "name": "__func__.8235", 
                            "size": 25
                        }, 
                        {
                            "name": "__func__.8247", 
                            "size": 22
                        }, 
                        {
                            "name": "__func__.8379", 
                            "size": 22
                        }, 
                        {
                            "name": "__func__.8383", 
                            "size": 22
                        }, 
                        {
                            "name": "__func__.8387", 
                            "size": 22
                        }, 
                        {
                            "name": "__func__.8419", 
                            "size": 22
                        }, 
                        {
                            "name": "__gedf2", 
                            "size": 138
                        }, 
                        {
                            "name": "__gtdf2", 
                            "size": 138
                        }, 
                        {
                            "name": "__hi0bits", 
                            "size": 62
                        }, 
                        {
                            "name": "__i2b", 
                            "size": 18
                        }, 
                        {
                            "name": "__ledf2", 
                            "size": 130
                        }, 
                        {
                            "name": "__libc_init_array", 
                            "size": 80
                        }, 
                        {
                            "name": "__lo0bits", 
                            "size": 94
                        }, 
                        {
                            "name": "__locale_mb_cur_max", 
                            "size": 28
                        }, 
                        {
                            "name": "__lshift", 
                            "size": 162
                        }, 
                        {
                            "name": "__ltdf2", 
                            "size": 130
                        }, 
                        {
                            "name": "__mcmp", 
                            "size": 54
                        }, 
                        {
                            "name": "__mdiff", 
                            "size": 264
                        }, 
                        {
                            "name": "__mprec_bigtens", 
                            "size": 40
                        }, 
                        {
                            "name": "__mprec_tens", 
                            "size": 200
                        }, 
                        {
                            "name": "__muldf3", 
                            "size": 596
                        }, 
                        {
                            "name": "__multadd", 
                            "size": 128
                        }, 
                        {
                            "name": "__multiply", 
                            "size": 292
                        }, 
                        {
                            "name": "__nedf2", 
                            "size": 122
                        }, 
                        {
                            "name": "__pow5mult", 
                            "size": 160
                        }, 
                        {
                            "name": "__retarget_lock_acquire_recursive", 
                            "size": 2
                        }, 
                        {
                            "name": "__retarget_lock_close_recursive", 
                            "size": 2
                        }, 
                        {
                            "name": "__retarget_lock_init_recursive", 
                            "size": 2
                        }, 
                        {
                            "name": "__retarget_lock_release_recursive", 
                            "size": 2
                        }, 
                        {
                            "name": "__sbprintf", 
                            "size": 132
                        }, 
                        {
                            "name": "__sclose", 
                            "size": 8
                        }, 
                        {
                            "name": "__sflush_r", 
                            "size": 320
                        }, 
                        {
                            "name": "__sfp_lock_acquire", 
                            "size": 12
                        }, 
                        {
                            "name": "__sfp_lock_release", 
                            "size": 12
                        }, 
                        {
                            "name": "__sfvwrite_r", 
                            "size": 752
                        }, 
                        {
                            "name": "__sinit", 
                            "size": 88
                        }, 
                        {
                            "name": "__smakebuf_r", 
                            "size": 148
                        }, 
                        {
                            "name": "__sprint_r", 
                            "size": 18
                        }, 
                        {
                            "name": "__sprint_r.part.0", 
                            "size": 126
                        }, 
                        {
                            "name": "__sread", 
                            "size": 34
                        }, 
                        {
                            "name": "__sseek", 
                            "size": 32
                        }, 
                        {
                            "name": "__ssprint_r", 
                            "size": 252
                        }, 
                        {
                            "name": "__subdf3", 
                            "size": 634
                        }, 
                        {
                            "name": "__swbuf_r", 
                            "size": 174
                        }, 
                        {
                            "name": "__swhatbuf_r", 
                            "size": 92
                        }, 
                        {
                            "name": "__swrite", 
                            "size": 60
                        }, 
                        {
                            "name": "__swsetup_r", 
                            "size": 200
                        }, 
                        {
                            "name": "__udivmoddi4", 
                            "size": 732
                        }, 
                        {
                            "name": "__unorddf2", 
                            "size": 44
                        }, 
                        {
                            "name": "__uvisor_mode", 
                            "size": 4
                        }, 
                        {
                            "name": "__uvisor_page_size", 
                            "size": 4
                        }, 
                        {
                            "name": "_cleanup_r", 
                            "size": 12
                        }, 
                        {
                            "name": "_close_r", 
                            "size": 36
                        }, 
                        {
                            "name": "_ctype_", 
                            "size": 257
                        }, 
                        {
                            "name": "_dtoa_r", 
                            "size": 3666
                        }, 
                        {
                            "name": "_fclose_r", 
                            "size": 194
                        }, 
                        {
                            "name": "_fflush_r", 
                            "size": 84
                        }, 
                        {
                            "name": "_fputwc_r", 
                            "size": 102
                        }, 
                        {
                            "name": "_fstat_r", 
                            "size": 40
                        }, 
                        {
                            "name": "_fwalk_reent", 
                            "size": 82
                        }, 
                        {
                            "name": "_getpid", 
                            "size": 16
                        }, 
                        {
                            "name": "_getpid_r", 
                            "size": 4
                        }, 
                        {
                            "name": "_global_impure_ptr", 
                            "size": 4
                        }, 
                        {
                            "name": "_gpio_init_in", 
                            "size": 38
                        }, 
                        {
                            "name": "_isatty_r", 
                            "size": 36
                        }, 
                        {
                            "name": "_kill", 
                            "size": 16
                        }, 
                        {
                            "name": "_kill_r", 
                            "size": 40
                        }, 
                        {
                            "name": "_localeconv_r", 
                            "size": 28
                        }, 
                        {
                            "name": "_lseek_r", 
                            "size": 44
                        }, 
                        {
                            "name": "_raise_r", 
                            "size": 96
                        }, 
                        {
                            "name": "_read_r", 
                            "size": 44
                        }, 
                        {
                            "name": "_svfprintf_r", 
                            "size": 5212
                        }, 
                        {
                            "name": "_vfiprintf_r", 
                            "size": 3216
                        }, 
                        {
                            "name": "_vfprintf_r", 
                            "size": 5464
                        }, 
                        {
                            "name": "_vsnprintf_r", 
                            "size": 114
                        }, 
                        {
                            "name": "_wcrtomb_r", 
                            "size": 84
                        }, 
                        {
                            "name": "_write_r", 
                            "size": 44
                        }, 
                        {
                            "name": "abort", 
                            "size": 14
                        }, 
                        {
                            "name": "blanks.7217", 
                            "size": 16
                        }, 
                        {
                            "name": "blanks.7223", 
                            "size": 16
                        }, 
                        {
                            "name": "blanks.7238", 
                            "size": 16
                        }, 
                        {
                            "name": "core_util_critical_section_exit", 
                            "size": 36
                        }, 
                        {
                            "name": "fflush", 
                            "size": 36
                        }, 
                        {
                            "name": "fiprintf", 
                            "size": 40
                        }, 
                        {
                            "name": "fllFactorTable.7835", 
                            "size": 16
                        }, 
                        {
                            "name": "free", 
                            "size": 16
                        }, 
                        {
                            "name": "is_kernel_initialized", 
                            "size": 48
                        }, 
                        {
                            "name": "malloc", 
                            "size": 16
                        }, 
                        {
                            "name": "mbed_main", 
                            "size": 2
                        }, 
                        {
                            "name": "osRtxConfig", 
                            "size": 104
                        }, 
                        {
                            "name": "osRtxMemoryPoolAlloc", 
                            "size": 92
                        }, 
                        {
                            "name": "osRtxMemoryPoolInit", 
                            "size": 92
                        }, 
                        {
                            "name": "osRtxMessageQueuePostProcess", 
                            "size": 258
                        }, 
                        {
                            "name": "osRtxSemaphorePostProcess", 
                            "size": 44
                        }, 
                        {
                            "name": "osRtxThreadDelayInsert", 
                            "size": 92
                        }, 
                        {
                            "name": "osRtxThreadDelayRemove", 
                            "size": 84
                        }, 
                        {
                            "name": "osRtxThreadFree", 
                            "size": 84
                        }, 
                        {
                            "name": "osRtxThreadPostProcess", 
                            "size": 52
                        }, 
                        {
                            "name": "osRtxThreadRegPtr", 
                            "size": 6
                        }, 
                        {
                            "name": "osRtxUserSVC", 
                            "size": 4
                        }, 
                        {
                            "name": "osThreadContextNew", 
                            "size": 92
                        }, 
                        {
                            "name": "os_cb_sections", 
                            "size": 56
                        }, 
                        {
                            "name": "p05.6055", 
                            "size": 12
                        }, 
                        {
                            "name": "printf", 
                            "size": 40
                        }, 
                        {
                            "name": "quorem", 
                            "size": 296
                        }, 
                        {
                            "name": "raise", 
                            "size": 16
                        }, 
                        {
                            "name": "std.isra.0", 
                            "size": 80
                        }, 
                        {
                            "name": "strlen", 
                            "size": 220
                        }, 
                        {
                            "name": "svcRtxSemaphoreAcquire", 
                            "size": 112
                        }, 
                        {
                            "name": "svcRtxSemaphoreRelease", 
                            "size": 100
                        }, 
                        {
                            "name": "svcRtxThreadGetName", 
                            "size": 40
                        }, 
                        {
                            "name": "us_ticker_init", 
                            "size": 144
                        }, 
                        {
                            "name": "vsnprintf", 
                            "size": 32
                        }, 
                        {
                            "name": "zeroes.7218", 
                            "size": 16
                        }, 
                        {
                            "name": "zeroes.7224", 
                            "size": 16
                        }, 
                        {
                            "name": "zeroes.7239", 
                            "size": 16
                        }
                    ]
                }, 
                {
                    "name": "irq_cm4f.S", 
                    "children": [
                        {
                            "name": "SVC_Handler", 
                            "size": 122
                        }
                    ]
                }, 
                {
                    "name": "source", 
                    "children": [
                        {
                            "name": "led.cpp", 
                            "children": [
                                {
                                    "name": "my_box_main(void const*)", 
                                    "size": 152
                                }, 
                                {
                                    "name": "my_box_switch_irq()", 
                                    "size": 72
                                }
                            ]
                        }, 
                        {
                            "name": "main.cpp", 
                            "children": [
                                {
                                    "name": "main", 
                                    "size": 76
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".bss", 
            "children": [
                {
                    "name": "libc", 
                    "children": [
                        {
                            "name": "debugged_once_before.5908", 
                            "size": 4
                        }, 
                        {
                            "name": "g_box_mem_pos.6065", 
                            "size": 4
                        }, 
                        {
                            "name": "g_debug_box", 
                            "size": 12
                        }, 
                        {
                            "name": "g_page_count_total", 
                            "size": 1
                        }, 
                        {
                            "name": "g_page_head_end_rounded", 
                            "size": 4
                        }, 
                        {
                            "name": "g_page_heap_start", 
                            "size": 4
                        }, 
                        {
                            "name": "g_page_map_shift", 
                            "size": 1
                        }, 
                        {
                            "name": "g_page_owner_map", 
                            "size": 20
                        }, 
                        {
                            "name": "g_page_size", 
                            "size": 4
                        }, 
                        {
                            "name": "g_virq_prio_bits", 
                            "size": 1
                        }, 
                        {
                            "name": "g_virq_vector", 
                            "size": 688
                        }, 
                        {
                            "name": "g_vmpu_box_count", 
                            "size": 1
                        }, 
                        {
                            "name": "g_vmpu_boxes_counted", 
                            "size": 1
                        }, 
                        {
                            "name": "filehandles", 
                            "size": 256
                        }, 
                        {
                            "name": "terminate_hook", 
                            "size": 4
                        }, 
                        {
                            "name": "__lock___arc4random_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___at_quick_exit_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___atexit_recursive_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___dd_hash_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___env_recursive_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___malloc_recursive_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___sfp_recursive_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___sinit_recursive_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "__lock___tz_mutex", 
                            "size": 1
                        }, 
                        {
                            "name": "completed.8667", 
                            "size": 1
                        }, 
                        {
                            "name": "errno", 
                            "size": 4
                        }, 
                        {
                            "name": "g_xtal0Freq", 
                            "size": 4
                        }, 
                        {
                            "name": "g_xtal32Freq", 
                            "size": 4
                        }, 
                        {
                            "name": "has_been_called.3699", 
                            "size": 1
                        }, 
                        {
                            "name": "kernel_running.6055", 
                            "size": 1
                        }, 
                        {
                            "name": "object.8672", 
                            "size": 24
                        }, 
                        {
                            "name": "osEventObs", 
                            "size": 4
                        }
                    ]
                }, 
                {
                    "name": "mbed-os", 
                    "children": [
                        {
                            "name": "features", 
                            "children": [
                                {
                                    "name": "FEATURE_UVISOR", 
                                    "children": [
                                        {
                                            "name": "importer", 
                                            "children": [
                                                {
                                                    "name": "TARGET_IGNORE", 
                                                    "children": [
                                                        {
                                                            "name": "uvisor", 
                                                            "children": [
                                                                {
                                                                    "name": "core", 
                                                                    "children": [
                                                                        {
                                                                            "name": "vmpu", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "mpu_kinetis", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "vmpu_kinetis_aips.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "g_aipsx_all", 
                                                                                                            "size": 32
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_aipsx_box", 
                                                                                                            "size": 160
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_aipsx_exc", 
                                                                                                            "size": 32
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "vmpu_kinetis_mpu.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "g_mpu_box_region", 
                                                                                                            "size": 40
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_mpu_priority", 
                                                                                                            "size": 12
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_mpu_region", 
                                                                                                            "size": 256
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_mpu_region_count", 
                                                                                                            "size": 2
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }, 
                                                                        {
                                                                            "name": "system", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "core_armv7m", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "box_init_v7m.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "g_box_init_box0_sp", 
                                                                                                            "size": 4
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_box_init_counter", 
                                                                                                            "size": 1
                                                                                                        }, 
                                                                                                        {
                                                                                                            "name": "g_box_init_happened", 
                                                                                                            "size": 1
                                                                                                        }
                                                                                                    ]
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "virq.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "g_irq_disable_all_counter", 
                                                                                                            "size": 20
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "context.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_context_p", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "g_context_previous_states", 
                                                                                                    "size": 128
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "page_allocator.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_page_count_free", 
                                                                                                    "size": 1
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "g_page_heap_end", 
                                                                                                    "size": 4
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "g_page_usage_map", 
                                                                                                    "size": 4
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "page_allocator_faults.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_page_fault_table", 
                                                                                                    "size": 64
                                                                                                }
                                                                                            ]
                                                                                        }, 
                                                                                        {
                                                                                            "name": "thread.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "thread", 
                                                                                                    "size": 128
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }, 
                                                                                {
                                                                                    "name": "inc", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "context.h", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_context_current_states", 
                                                                                                    "size": 580
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }, 
                                                                        {
                                                                            "name": "debug", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "debug_box.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_debug_interrupt_sp", 
                                                                                                    "size": 20
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, 
                                {
                                    "name": "storage", 
                                    "children": [
                                        {
                                            "name": "FEATURE_STORAGE", 
                                            "children": [
                                                {
                                                    "name": "cfstore", 
                                                    "children": [
                                                        {
                                                            "name": "source", 
                                                            "children": [
                                                                {
                                                                    "name": "cfstore_svm.cpp", 
                                                                    "children": [
                                                                        {
                                                                            "name": "volumeManager", 
                                                                            "size": 184
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "rtos", 
                            "children": [
                                {
                                    "name": "TARGET_CORTEX", 
                                    "children": [
                                        {
                                            "name": "mbed_boot.c", 
                                            "children": [
                                                {
                                                    "name": "_main_obj", 
                                                    "size": 72
                                                }, 
                                                {
                                                    "name": "_main_stack", 
                                                    "size": 4096
                                                }, 
                                                {
                                                    "name": "_main_thread_attr", 
                                                    "size": 36
                                                }, 
                                                {
                                                    "name": "env_mutex_attr", 
                                                    "size": 16
                                                }, 
                                                {
                                                    "name": "env_mutex_id", 
                                                    "size": 4
                                                }, 
                                                {
                                                    "name": "env_mutex_obj", 
                                                    "size": 28
                                                }, 
                                                {
                                                    "name": "malloc_mutex_attr", 
                                                    "size": 16
                                                }, 
                                                {
                                                    "name": "malloc_mutex_id", 
                                                    "size": 4
                                                }, 
                                                {
                                                    "name": "malloc_mutex_obj", 
                                                    "size": 28
                                                }, 
                                                {
                                                    "name": "mbed_stack_isr_size", 
                                                    "size": 4
                                                }, 
                                                {
                                                    "name": "mbed_stack_isr_start", 
                                                    "size": 4
                                                }, 
                                                {
                                                    "name": "singleton_mutex_attr", 
                                                    "size": 16
                                                }, 
                                                {
                                                    "name": "singleton_mutex_id", 
                                                    "size": 4
                                                }, 
                                                {
                                                    "name": "singleton_mutex_obj", 
                                                    "size": 28
                                                }
                                            ]
                                        }, 
                                        {
                                            "name": "rtx5", 
                                            "children": [
                                                {
                                                    "name": "rtx_lib.c", 
                                                    "children": [
                                                        {
                                                            "name": "os_idle_thread_cb", 
                                                            "size": 72
                                                        }, 
                                                        {
                                                            "name": "os_idle_thread_stack", 
                                                            "size": 512
                                                        }, 
                                                        {
                                                            "name": "os_isr_queue", 
                                                            "size": 64
                                                        }, 
                                                        {
                                                            "name": "os_timer_mq_cb", 
                                                            "size": 52
                                                        }, 
                                                        {
                                                            "name": "os_timer_mq_data", 
                                                            "size": 80
                                                        }, 
                                                        {
                                                            "name": "os_timer_thread_cb", 
                                                            "size": 72
                                                        }, 
                                                        {
                                                            "name": "os_timer_thread_stack", 
                                                            "size": 768
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "targets", 
                            "children": [
                                {
                                    "name": "TARGET_Freescale", 
                                    "children": [
                                        {
                                            "name": "TARGET_MCUXpresso_MCUS", 
                                            "children": [
                                                {
                                                    "name": "api", 
                                                    "children": [
                                                        {
                                                            "name": "gpio_irq_api.c", 
                                                            "children": [
                                                                {
                                                                    "name": "channel_ids", 
                                                                    "size": 640
                                                                }, 
                                                                {
                                                                    "name": "irq_handler", 
                                                                    "size": 4
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "TARGET_MCU_K64F", 
                                                    "children": [
                                                        {
                                                            "name": "drivers", 
                                                            "children": [
                                                                {
                                                                    "name": "fsl_dspi.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "g_dspiHandle", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "s_dspiMasterIsr", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_dspiSlaveIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_edma.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_EDMAHandle", 
                                                                            "size": 64
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_enet.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_ENETHandle", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_enetErrIsr", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_enetRxIsr", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_enetTxIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_flexcan.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_flexcanHandle", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_flexcanIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_i2c.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_i2cHandle", 
                                                                            "size": 12
                                                                        }, 
                                                                        {
                                                                            "name": "s_i2cMasterIsr", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_i2cSlaveIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_sai.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_saiHandle", 
                                                                            "size": 8
                                                                        }, 
                                                                        {
                                                                            "name": "s_saiRxIsr", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_saiTxIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_sdhc.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_sdhcHandle", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_sdhcIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "fsl_uart.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_uartHandle", 
                                                                            "size": 24
                                                                        }, 
                                                                        {
                                                                            "name": "s_uartIsr", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "serial_api.c", 
                                                            "children": [
                                                                {
                                                                    "name": "stdio_uart", 
                                                                    "size": 188
                                                                }, 
                                                                {
                                                                    "name": "stdio_uart_inited", 
                                                                    "size": 4
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "us_ticker.c", 
                                                            "children": [
                                                                {
                                                                    "name": "us_ticker_inited", 
                                                                    "size": 4
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "platform", 
                            "children": [
                                {
                                    "name": "mbed_critical.c", 
                                    "children": [
                                        {
                                            "name": "critical_interrupts_disabled", 
                                            "size": 1
                                        }, 
                                        {
                                            "name": "interrupt_enable_counter", 
                                            "size": 4
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_error.c", 
                                    "children": [
                                        {
                                            "name": "error_in_progress", 
                                            "size": 1
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed_retarget.cpp", 
                                    "children": [
                                        {
                                            "name": "mbed_heap_size", 
                                            "size": 4
                                        }, 
                                        {
                                            "name": "mbed_heap_start", 
                                            "size": 4
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "hal", 
                            "children": [
                                {
                                    "name": "mbed_us_ticker_api.c", 
                                    "children": [
                                        {
                                            "name": "events", 
                                            "size": 24
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".data", 
            "children": [
                {
                    "name": "mbed-os", 
                    "children": [
                        {
                            "name": "features", 
                            "children": [
                                {
                                    "name": "FEATURE_UVISOR", 
                                    "children": [
                                        {
                                            "name": "importer", 
                                            "children": [
                                                {
                                                    "name": "TARGET_IGNORE", 
                                                    "children": [
                                                        {
                                                            "name": "uvisor", 
                                                            "children": [
                                                                {
                                                                    "name": "core", 
                                                                    "children": [
                                                                        {
                                                                            "name": "system", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "inc", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "context.h", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_active_box", 
                                                                                                    "size": 1
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }, 
                                                                        {
                                                                            "name": "vmpu", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "mpu_kinetis", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "vmpu_kinetis_mpu.c", 
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "name": "g_mpu_slot", 
                                                                                                            "size": 1
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "targets", 
                            "children": [
                                {
                                    "name": "TARGET_Freescale", 
                                    "children": [
                                        {
                                            "name": "TARGET_MCUXpresso_MCUS", 
                                            "children": [
                                                {
                                                    "name": "TARGET_MCU_K64F", 
                                                    "children": [
                                                        {
                                                            "name": "drivers", 
                                                            "children": [
                                                                {
                                                                    "name": "fsl_clock.c", 
                                                                    "children": [
                                                                        {
                                                                            "name": "s_fastIrcFreq", 
                                                                            "size": 4
                                                                        }, 
                                                                        {
                                                                            "name": "s_slowIrcFreq", 
                                                                            "size": 4
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, 
                {
                    "name": "libc", 
                    "children": [
                        {
                            "name": "g_priv_sys_hooks", 
                            "size": 20
                        }, 
                        {
                            "name": "SystemCoreClock", 
                            "size": 4
                        }, 
                        {
                            "name": "idle_hook_fptr", 
                            "size": 4
                        }, 
                        {
                            "name": "__global_locale", 
                            "size": 364
                        }, 
                        {
                            "name": "_impure_ptr", 
                            "size": 4
                        }, 
                        {
                            "name": "impure_data", 
                            "size": 1064
                        }, 
                        {
                            "name": "osRtxInfo", 
                            "size": 176
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".uninitialized", 
            "children": [
                {
                    "name": "mbed-os", 
                    "children": [
                        {
                            "name": "features", 
                            "children": [
                                {
                                    "name": "FEATURE_UVISOR", 
                                    "children": [
                                        {
                                            "name": "importer", 
                                            "children": [
                                                {
                                                    "name": "TARGET_IGNORE", 
                                                    "children": [
                                                        {
                                                            "name": "uvisor", 
                                                            "children": [
                                                                {
                                                                    "name": "core", 
                                                                    "children": [
                                                                        {
                                                                            "name": "debug", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "src", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "debug.c", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "g_semihosting_magic", 
                                                                                                    "size": 4
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, 
                {
                    "name": "libc", 
                    "children": [
                        {
                            "name": "__uvisor_ps", 
                            "size": 4
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".uvisor.secure", 
            "children": [
                {
                    "name": "libc", 
                    "children": [
                        {
                            "name": "my_box_cfg", 
                            "size": 52
                        }, 
                        {
                            "name": "public_box_cfg", 
                            "size": 52
                        }, 
                        {
                            "name": "public_box_cfg_ptr", 
                            "size": 4
                        }
                    ]
                }, 
                {
                    "name": "source", 
                    "children": [
                        {
                            "name": "led.cpp", 
                            "children": [
                                {
                                    "name": "my_box_cfg_ptr", 
                                    "size": 4
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".interrupts", 
            "children": [
                {
                    "name": "mbed-os", 
                    "children": [
                        {
                            "name": "rtos", 
                            "children": [
                                {
                                    "name": "TARGET_CORTEX", 
                                    "children": [
                                        {
                                            "name": "rtx5", 
                                            "children": [
                                                {
                                                    "name": "rtx_evr.c", 
                                                    "children": [
                                                        {
                                                            "name": "__isr_vector", 
                                                            "size": 1024
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".uvisor.bss", 
            "children": [
                {
                    "name": "source", 
                    "children": [
                        {
                            "name": "main.cpp", 
                            "children": [
                                {
                                    "name": "__reserved_stack", 
                                    "size": 128
                                }
                            ]
                        }, 
                        {
                            "name": "led.cpp", 
                            "children": [
                                {
                                    "name": "my_box_reserved", 
                                    "size": 16384
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": ".page_heap", 
            "children": [
                {
                    "name": "source", 
                    "children": [
                        {
                            "name": "main.cpp", 
                            "children": [
                                {
                                    "name": "public_page_heap_reserved", 
                                    "size": 40960
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}